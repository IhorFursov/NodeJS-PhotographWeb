-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 19 2015 г., 19:36
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `photobd`
--

-- --------------------------------------------------------

--
-- Структура таблицы `fotograf`
--

CREATE TABLE IF NOT EXISTS `fotograf` (
  `id_fotograf` int(11) NOT NULL,
  `name_fotograf` varchar(50) NOT NULL,
  `surname_fotograf` varchar(50) NOT NULL,
  `vozrast` int(11) NOT NULL,
  PRIMARY KEY (`id_fotograf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `fotograf`
--

INSERT INTO `fotograf` (`id_fotograf`, `name_fotograf`, `surname_fotograf`, `vozrast`) VALUES
(101, 'Антон', 'Белогородов', 25);

-- --------------------------------------------------------

--
-- Структура таблицы `fotografia`
--

CREATE TABLE IF NOT EXISTS `fotografia` (
  `id_fotografii` int(11) NOT NULL,
  `nazvanie_foto` varchar(50) NOT NULL,
  `id_janra` int(11) NOT NULL,
  `id_camera` int(11) NOT NULL,
  `photo_src` varchar(50) NOT NULL,
  `opisanie` text NOT NULL,
  `id_fotografa` int(11) NOT NULL,
  PRIMARY KEY (`id_fotografii`),
  KEY `id_camera` (`id_camera`),
  KEY `id_janra` (`id_janra`),
  KEY `id_fotografii` (`id_fotografii`),
  KEY `id_fotografii_2` (`id_fotografii`),
  KEY `id_fotografa` (`id_fotografa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `fotografia`
--

INSERT INTO `fotografia` (`id_fotografii`, `nazvanie_foto`, `id_janra`, `id_camera`, `photo_src`, `opisanie`, `id_fotografa`) VALUES
(101, 'В Ялте', 101, 201, 'images/building1.jpg', 'Центральная набережная Ялты. Одно из самых известных мест Крымского полуострова. Напротив здания на фото расположен центральный городской пляж и бухта для стоянки яхт. ', 101),
(102, 'Цветомузыкальный фонтан', 101, 201, 'images/fontan1.jpeg', 'Фонтан на центральной набережной Ялты. Открыт к проведению Евро-2012 и в поддержку Украинской футбольной лиги.', 101),
(103, 'Вид на крымское побережье', 101, 201, 'images/landscape2.jpg', 'Отправившись в морскую экскурсию вдоль побережья крымского полуострова, видим прекрасные пейзажи величественных склонов гор. Позади долгие поездки - теперь море донесет вас на волнах к удивительным достопримечательностям.', 101),
(104, 'Лазурное "Черное море"', 101, 201, 'images/landscape1.jpg', 'Удивительны цвета черного моря, у берегов Гурзуфа, в летний полдень. Кажется что ты попал в фильм "Пираты карибского моря". Здесь редки люди и удивительны пейзажи. Отличное место для отдыха и уединения!', 101),
(106, 'Портрет девушки', 101, 201, 'images/portret5.jpg', 'Это мой фотопортрет девушки на природе. Пусть он далек от идеала, но зато в нем наглядно отображены правила художественной экспозиции, фотографии в условиях яркого света при низкой чувствительности камеры.', 101),
(201, 'Ингрид Бердман', 101, 201, 'images/portret1.jpeg', 'Это фоторабота 1950 гг. прекрасно иллюстрирует всю специфику и сложность работы фотографа. Запечатлеть миг из жизни человека так, чтобы о нем навек осталось незыблемое представление. Портрет - нечто большее нежели просто фотография лица человека. Это отображение и тела и эмоций и чувств. Требует эмоционального контакта между фотографом и человеком. ', 101),
(202, 'Париж', 101, 201, 'images/paris.jpeg', 'Это пример панорамы города. Фотография позволяет передать не только настроение человека, но и нрав погоды. Буря или зной, ветер или утренняя прохлада - все эти состояния подсилу передать фотографу.', 101),
(203, 'Тауэр. Высокая выдержка', 101, 201, 'images/london1.jpg', 'Высокая выдержка - интересный инструмент фотографа. Она позволяет запечетлевать на фото не мгновения, а целые отрезки времени, размазывая светящееся объекты в линии вокруг "невидимого" объекта.', 101),
(204, 'Низкая выдержка. Вода', 101, 201, 'images/orange1.jpg', 'Низкая выдержка - в противовес высокой. Позволяет захватить миг который ускользает в силу физиологии человеческого глаза. На фотографии видно капли воды, ударившейся о мякоть манго.\r\nЕще один пример того, что фотоаппарат способен захватить большее, чем глаз человека.', 101),
(205, 'Звездное небо', 101, 201, 'images/nebo1.jpg', 'Пример применения сверхвысокой выдержки для запечатления перемещения звезд по небу ночью. Фотографы ценят высокую выдержку ведб эффект от ее применения в некоторых ситуациях трудно переоценить.', 101),
(206, 'Кот', 101, 201, 'images/kot2.jpg', 'Известная фотография кота сделанная в 2015 году. Зернистость фото очень маленькая, что делает фото четким и ясным. Фотографировать животных легче, чем людей. Их эмоции неподдельны, а найти контакт с ними весьма легко - нужно лишь угостить четвероногого друга вкусненьким.', 101),
(207, 'Кот охотиться', 101, 201, 'images/kot1.jpg', 'Наглядный пример того - как легко запечатлеть характерную для кота позу. Ясно видно что домашний питомец выбрал себе жертву - скорее всего это нога хозяина) Коты - часть нашей повседневной жизни. Их фото также востребованы, как и фотопортреты людей. ', 101),
(208, 'Подсолнухи', 101, 201, 'images/podsolnuhi.jpg', 'Подсолнухи на Украине. Свотографированы на 50мм объективе. Видна четкость изображения и яркость обеспеченная правильной светосилой и хорошей просветленной оптикой объектива.', 101);

-- --------------------------------------------------------

--
-- Структура таблицы `janri`
--

CREATE TABLE IF NOT EXISTS `janri` (
  `id_ganra` int(11) NOT NULL,
  `nazvanie_janra` varchar(50) NOT NULL,
  PRIMARY KEY (`id_ganra`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `janri`
--

INSERT INTO `janri` (`id_ganra`, `nazvanie_janra`) VALUES
(101, 'Все фото');

-- --------------------------------------------------------

--
-- Структура таблицы `kamera`
--

CREATE TABLE IF NOT EXISTS `kamera` (
  `id_kamera` int(11) NOT NULL,
  `model_kamera` varchar(50) NOT NULL,
  `objective_camera` varchar(50) NOT NULL,
  PRIMARY KEY (`id_kamera`),
  KEY `id_kamera` (`id_kamera`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `kamera`
--

INSERT INTO `kamera` (`id_kamera`, `model_kamera`, `objective_camera`) VALUES
(201, 'Canon EOS 1100D', 'под байонет Canon EF/EF-S ');

-- --------------------------------------------------------

--
-- Структура таблицы `kontakti`
--

CREATE TABLE IF NOT EXISTS `kontakti` (
  `id_kontakta` int(11) NOT NULL,
  `id_fotografa` int(11) NOT NULL,
  `kontakt` varchar(50) NOT NULL,
  `informacia` varchar(50) NOT NULL,
  PRIMARY KEY (`id_kontakta`),
  KEY `id_fotografa` (`id_fotografa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `fotografia`
--
ALTER TABLE `fotografia`
  ADD CONSTRAINT `fotografia_ibfk_1` FOREIGN KEY (`id_camera`) REFERENCES `kamera` (`id_kamera`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fotografia_ibfk_2` FOREIGN KEY (`id_janra`) REFERENCES `janri` (`id_ganra`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fotografia_ibfk_3` FOREIGN KEY (`id_fotografa`) REFERENCES `fotograf` (`id_fotograf`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `kontakti`
--
ALTER TABLE `kontakti`
  ADD CONSTRAINT `kontakti_ibfk_2` FOREIGN KEY (`id_fotografa`) REFERENCES `fotograf` (`id_fotograf`) ON DELETE NO ACTION ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
