-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 04 Mar 2023, 22:42
-- Wersja serwera: 10.4.24-MariaDB
-- Wersja PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `react-notes`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `notes`
--

CREATE TABLE `notes` (
  `id` int(15) NOT NULL,
  `title` varchar(25) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `notes`
--

INSERT INTO `notes` (`id`, `title`, `description`) VALUES
(223, 'Get enough sleep', 'Getting enough sleep is crucial for your physical and mental health. Aim for 7-8 hours of sleep each night and establish a bedtime routine to help you relax and prepare for sleep. Avoid using electronic devices in bed and try to create a cool and dark environment to promote restful sleep.'),
(224, 'Exercise daily', 'This note is a reminder to exercise daily, even if it\'s just a short walk or a few minutes of stretching. Regular exercise can help improve cardiovascular health, build muscle and bone strength, and reduce the risk of chronic diseases.'),
(225, 'Practice gratitude', 'This note is a reminder to practice gratitude regularly by focusing on the things you are thankful for in your life. Practicing gratitude has been shown to improve mood, increase happiness, and reduce stress levels.'),
(226, 'Eat a balanced diet', 'A balanced diet is important for providing your body with the necessary nutrients it needs to function properly. This includes a variety of fruits and vegetables, lean protein, whole grains, and healthy fats. Aim to eat a rainbow of colors each day and limit processed foods, sugary drinks, and saturated fats.');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=227;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
