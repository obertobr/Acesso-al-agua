<?php
require 'config.php';

$request_method = $_SERVER["REQUEST_METHOD"];

switch($request_method) {
    case 'GET':
        if (empty($_GET["language"])) {
            echo json_encode(array('status' => 0, 'status_message' => 'Language not selected.'));
            return;
        }

        if (!empty($_GET["id"])) {
            $id = intval($_GET["id"]);
            $language = $_GET["language"];
            getPost($id, $language);
        } else {
            $language = $_GET["language"];
            getPosts($language);
        }
        break;
    case 'POST':
        addPost();
        break;
    case 'DELETE':
        $id = intval($_GET["id"]);
        deletePost($id);
        break;
    default:
        header("HTTP/1.0 405 Method Not Allowed");
        break;
}

function getPosts($language) {
    global $pdo;

    $query = "SELECT id FROM language WHERE name = :language";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':language', $language);
    $stmt->execute();
    $language_id = $stmt->fetchColumn();
    
    if (!$language_id) {
        echo json_encode(array('status' => 0, 'status_message' => 'Language not found.'));
        return;
    }

    $query = "SELECT p.id, p.img, p.date, pc.headerText, pc.bodyText 
              FROM post p 
              JOIN postcontent pc ON p.id = pc.postID
              WHERE pc.languageID = :language_id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':language_id', $language_id, PDO::PARAM_INT);
    $stmt->execute();
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($posts);
}

function getPost($id, $language) {
    global $pdo;
    
    $query = "SELECT id FROM language WHERE name = :language";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':language', $language);
    $stmt->execute();
    $language_id = $stmt->fetchColumn();
    
    if (!$language_id) {
        echo json_encode(array('status' => 0, 'status_message' => 'Language not found.'));
        return;
    }

    $query = "SELECT p.id, p.img, p.date, pc.headerText, pc.bodyText 
              FROM post p 
              JOIN postcontent pc ON p.id = pc.postID
              WHERE p.id = :id AND pc.languageID = :language_id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->bindParam(':language_id', $language_id, PDO::PARAM_INT);
    $stmt->execute();
    $post = $stmt->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($post);
}

function addPost() {
    global $pdo;
    $data = json_decode(file_get_contents('php://input'), true);
    $img = $data['img'];
    $date = date("Y-m-d");
    
    try {
        $pdo->beginTransaction();
        
        $query = "INSERT INTO post (img, date) VALUES (:img, :date)";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':img', $img);
        $stmt->bindParam(':date', $date);
        $stmt->execute();
        $post_id = $pdo->lastInsertId();
        
        $languages = ['portugues', 'english', 'espanol'];
        foreach ($languages as $language) {
            $query = "SELECT id FROM language WHERE name=:name";
            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':name', $language);
            $stmt->execute();
            $language_id = $stmt->fetchColumn();
            
            $headerText = $data[$language]['headerText'];
            $bodyText = $data[$language]['bodyText'];
            
            $query = "INSERT INTO postcontent (postID, languageID, headerText, bodyText) VALUES (:post_id, :language_id, :headerText, :bodyText)";
            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':post_id', $post_id);
            $stmt->bindParam(':language_id', $language_id);
            $stmt->bindParam(':headerText', $headerText);
            $stmt->bindParam(':bodyText', $bodyText);
            $stmt->execute();
        }
        
        $pdo->commit();
        $response = array('status' => 1, 'status_message' =>'Post added successfully.');
    } catch (Exception $e) {
        $pdo->rollBack();
        $response = array('status' => 0, 'status_message' => 'Post addition failed: ' . $e->getMessage());
    }
    
    echo json_encode($response);
}

function deletePost($id) {
    global $pdo;

    $query = "DELETE FROM postcontent WHERE postID=:id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    if ($stmt->execute()) {
        $response = array('status' => 1, 'status_message' =>'Post deleted successfully.');
    } else {
        $response = array('status' => 0, 'status_message' =>'Post deletion failed.');
    }
    
    $query = "DELETE FROM post WHERE id=:id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    if ($stmt->execute()) {
        $response = array('status' => 1, 'status_message' =>'Post deleted successfully.');
    } else {
        $response = array('status' => 0, 'status_message' =>'Post deletion failed.');
    }

    echo json_encode($response);
}
?>