-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 27/06/2024 às 02:25
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `posts`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `language`
--

CREATE TABLE `language` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `language`
--

INSERT INTO `language` (`id`, `name`) VALUES
(1, 'portugues'),
(2, 'english'),
(3, 'espanol');

-- --------------------------------------------------------

--
-- Estrutura para tabela `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `post`
--

INSERT INTO `post` (`id`, `img`, `date`) VALUES
(1, 'https://borgenproject.org/wp-content/uploads/8906604848_27c7d5321c_k-1-768x512.jpg', '2024-06-27'),
(2, 'https://media.datacenterdynamics.com/media/images/agua.width-880.jpg', '2024-06-27');

-- --------------------------------------------------------

--
-- Estrutura para tabela `postcontent`
--

CREATE TABLE `postcontent` (
  `id` int(11) NOT NULL,
  `postID` int(11) NOT NULL,
  `languageID` int(11) NOT NULL,
  `headerText` text NOT NULL,
  `bodyText` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `postcontent`
--

INSERT INTO `postcontent` (`id`, `postID`, `languageID`, `headerText`, `bodyText`) VALUES
(1, 1, 1, 'Desafios do Abastecimento de Água no Brasil', '<h3>Desigualdade e Disponibilidade</h3> <p>No Brasil, o acesso à água potável é desigual, com áreas urbanas desfrutando de melhor infraestrutura do que as áreas rurais. Apesar da abundância de recursos hídricos, regiões como o Nordeste sofrem com a escassez durante longos períodos de seca.</p> <h3>Poluição e Gestão Ineficiente</h3> <p>A poluição dos mananciais é uma preocupação crescente, com esgoto, resíduos industriais e agrícolas contaminando as fontes de água. Além disso, a gestão ineficiente leva ao desperdício e à má distribuição da água, exacerbando os problemas de acesso.</p> <h3>Soluções em Andamento</h3> <p>Para lidar com esses desafios, o Brasil tem investido em programas de saneamento básico, projetos de dessalinização e sistemas de reúso de água. No entanto, a implementação dessas soluções enfrenta obstáculos de financiamento e coordenação entre os diferentes níveis de governo.</p>'),
(2, 1, 2, 'Challenges in Water Supply in Brazil', '<h3>Inequality and Availability</h3> <p>In Brazil, access to clean water is unequal, with urban areas enjoying better infrastructure than rural areas. Despite the abundance of water resources, regions like the Northeast suffer from scarcity during long periods of drought.</p> <h3>Pollution and Inefficient Management</h3> <p>Pollution of water sources is a growing concern, with sewage, industrial, and agricultural waste contaminating water sources. Additionally, inefficient management leads to waste and poor water distribution, exacerbating access issues.</p> <h3>Ongoing Solutions</h3> <p>To address these challenges, Brazil has invested in basic sanitation programs, desalination projects, and water reuse systems. However, the implementation of these solutions faces obstacles of funding and coordination among different levels of government.</p>'),
(3, 1, 3, 'Desafíos del Abastecimiento de Agua en Brasil', '<h3>Desigualdad y Disponibilidad</h3> <p>En Brasil, el acceso al agua potable es desigual, con las áreas urbanas disfrutando de una mejor infraestructura que las áreas rurales. A pesar de la abundancia de recursos hídricos, regiones como el Nordeste sufren escasez durante largos períodos de sequía.</p> <h3>Contaminación y Gestión Ineficiente</h3> <p>La contaminación de los manantiales es una preocupación creciente, con aguas residuales, desechos industriales y agrícolas contaminando las fuentes de agua. Además, la gestión ineficiente conduce al desperdicio y a la mala distribución del agua, exacerbando los problemas de acceso.</p> <h3>Soluciones en Progreso</h3> <p>Para hacer frente a estos desafíos, Brasil ha invertido en programas de saneamiento básico, proyectos de desalinización y sistemas de reutilización de agua. Sin embargo, la implementación de estas soluciones enfrenta obstáculos de financiamiento y coordinación entre los diferentes niveles de gobierno.</p>'),
(4, 2, 1, 'Desafios e Soluções para o Acesso à Água no Brasil e no Chile', '<p>A água é essencial para a vida e o desenvolvimento das sociedades. No entanto, o acesso à água de qualidade ainda é um desafio tanto no Brasil quanto no Chile. Neste post, vamos explorar os principais desafios enfrentados por esses países e algumas das soluções que estão sendo implementadas para garantir que mais pessoas tenham acesso a esse recurso vital.</p><h3>Desafios no Brasil</h3><p>No Brasil, mesmo com a abundância de recursos hídricos, nem todos têm acesso à água potável. Regiões urbanas geralmente têm melhor infraestrutura de abastecimento do que áreas rurais e comunidades indígenas. Além disso, a poluição dos mananciais por esgoto, resíduos industriais e agrícolas é um problema grave. A gestão ineficiente muitas vezes resulta em desperdício e falta de abastecimento adequado.</p><h3>Desafios no Chile</h3><p>O Chile enfrenta desafios distintos devido à sua geografia e clima. No norte, a escassez de água é um problema crítico, especialmente no deserto de Atacama. Os conflitos pelo uso da água entre setores como agricultura, mineração e consumo doméstico são frequentes. Além disso, as mudanças climáticas, como a diminuição das geleiras e a variabilidade das chuvas, afetam a disponibilidade de água em diversas regiões do país.</p><h3>Soluções e Iniciativas</h3><p>Para enfrentar esses desafios, ambos os países têm adotado diversas estratégias e projetos. No Brasil, programas de saneamento básico e projetos de dessalinização no Nordeste têm sido implementados. No Chile, o uso de tecnologia de dessalinização e sistemas de reúso de água está sendo explorado. Campanhas educativas para incentivar o uso consciente da água e a preservação dos mananciais também estão em curso. Além disso, iniciativas de governança da água, como a criação de conselhos de bacia hidrográfica, visam melhorar a gestão dos recursos hídricos.</p><h3>Conclusão</h3><p>Garantir o acesso à água de qualidade é um desafio complexo que exige a colaboração entre governos, organizações não governamentais e a sociedade civil. No Brasil e no Chile, as iniciativas tecnológicas, educacionais e políticas estão ajudando a superar esses desafios, mas ainda há muito a ser feito. Continuar a investir em soluções sustentáveis e inclusivas é essencial para garantir que todos tenham acesso a esse recurso fundamental.</p>'),
(5, 2, 2, 'Challenges and Solutions for Access to Water in Brazil and Chile', '<p>Water is essential for life and the development of societies. However, access to quality water remains a challenge in both Brazil and Chile. In this post, we will explore the main challenges faced by these countries and some of the solutions being implemented to ensure that more people have access to this vital resource.</p> Challenges in Brazil</h3> <p>In Brazil, despite the abundance of water resources, not everyone has access to clean water. Urban areas generally have better supply infrastructure than rural areas and indigenous communities. Additionally, pollution of water sources by sewage, industrial, and agricultural waste is a serious problem. Inefficient management often results in waste and inadequate supply.</p> Challenges in Chile</h3> <p>Chile faces distinct challenges due to its geography and climate. In the north, water scarcity is a critical issue, especially in the Atacama Desert. Conflicts over water use among sectors such as agriculture, mining, and domestic consumption are frequent. Additionally, climate change, such as the decrease in glaciers and rainfall variability, affects water availability in various regions of the country.</p> Solutions and Initiatives</h3> <p>To address these challenges, both countries have adopted various strategies and projects. In Brazil, basic sanitation programs and desalination projects in the Northeast have been implemented. In Chile, the use of desalination technology and water reuse systems is being explored. Educational campaigns to encourage water-consciousness and the preservation of water sources are also underway. Additionally, water governance initiatives, such as the creation of watershed councils, aim to improve water resource management.</p> <h3>Conclusion</h3> <p>Ensuring access to quality water is a complex challenge that requires collaboration between governments, non-governmental organizations, and civil society. In Brazil and Chile, technological, educational, and policy initiatives are helping to overcome these challenges, but there is still much to be done. Continuing to invest in sustainable and inclusive solutions is essential to ensure that everyone has access to this fundamental resource.</p>'),
(6, 2, 3, 'Desafíos y Soluciones para el Acceso al Agua en Brasil y Chile', '<p>El agua es esencial para la vida y el desarrollo de las sociedades. Sin embargo, el acceso a agua de calidad sigue siendo un desafío tanto en Brasil como en Chile. En este post, exploraremos los principales desafíos enfrentados por estos países y algunas de las soluciones que se están implementando para garantizar que más personas tengan acceso a este recurso vital.</p> <h3>Desafíos en Brasil</h3> <p>En Brasil, a pesar de la abundancia de recursos hídricos, no todos tienen acceso a agua potable. Las regiones urbanas suelen tener una mejor infraestructura de suministro que las áreas rurales y las comunidades indígenas. Además, la contaminación de las fuentes de agua por desechos cloacales, industriales y agrícolas es un problema grave. La gestión ineficiente a menudo resulta en desperdicio y falta de suministro adecuado.</p> <h3>Desafíos en Chile</h3> <p>Chile enfrenta desafíos distintos debido a su geografía y clima. En el norte, la escasez de agua es un problema crítico, especialmente en el desierto de Atacama. Los conflictos por el uso del agua entre sectores como la agricultura, la minería y el consumo doméstico son frecuentes. Además, los cambios climáticos, como la disminución de los glaciares y la variabilidad de las lluvias, afectan la disponibilidad de agua en diversas regiones del país.</p> <h3>Soluciones e Iniciativas</h3> <p>Para enfrentar estos desafíos, ambos países han adoptado diversas estrategias y proyectos. En Brasil, se han implementado programas de saneamiento básico y proyectos de desalinización en el Nordeste. En Chile, se está explorando el uso de tecnología de desalinización y sistemas de reutilización de agua. También están en curso campañas educativas para fomentar el uso consciente del agua y la preservación de las fuentes de agua. Además, las iniciativas de gobernanza del agua, como la creación de consejos de cuenca hidrográfica, tienen como objetivo mejorar la gestión de los recursos hídricos.</p> <h3>Conclusión</h3> <p>Garantizar el acceso a agua de calidad es un desafío complejo que requiere la colaboración entre gobiernos, organizaciones no gubernamentales y la sociedad civil. En Brasil y Chile, las iniciativas tecnológicas, educativas y políticas están ayudando a superar estos desafíos, pero aún queda mucho por hacer. Continuar invirtiendo en soluciones sostenibles e inclusivas es esencial para garantizar que todos tengan acceso a este recurso fundamental.</p>');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `language`
--
ALTER TABLE `language`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `postcontent`
--
ALTER TABLE `postcontent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postKey` (`postID`),
  ADD KEY `languageKey` (`languageID`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `language`
--
ALTER TABLE `language`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `postcontent`
--
ALTER TABLE `postcontent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `postcontent`
--
ALTER TABLE `postcontent`
  ADD CONSTRAINT `languageKey` FOREIGN KEY (`languageID`) REFERENCES `language` (`id`),
  ADD CONSTRAINT `postKey` FOREIGN KEY (`postID`) REFERENCES `post` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
