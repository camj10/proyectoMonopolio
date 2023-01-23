-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-01-2023 a las 21:27:24
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `monopolysimpl`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugador`
--

CREATE TABLE `jugador` (
  `id` int(11) NOT NULL,
  `apodo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `jugador`
--

INSERT INTO `jugador` (`id`, `apodo`) VALUES
(1, 'Camattec'),
(2, 'Jicab');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tablero`
--

CREATE TABLE `tablero` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `precio` int(11) NOT NULL,
  `disponibilidad` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tablero`
--

INSERT INTO `tablero` (`id`, `nombre`, `descripcion`, `tipo`, `precio`, `disponibilidad`) VALUES
(1, 'Flota marina', 'Acciones', 'CompraVenta', 150, 'Disponible'),
(2, 'Club Nacional', 'Acciones', 'CompraVenta', 250, 'Disponible'),
(3, 'Club Independiente', 'Acciones', 'CompraVenta', 250, 'Disponible'),
(4, 'Compañía Ferroviaria', 'Acciones', 'CompraVenta', 500, 'Disponible'),
(5, 'Compañía de transporte', 'Acciones', 'CompraVenta', 250, 'Disponible'),
(6, 'Shopping Luna', 'Acciones', 'CompraVenta', 500, 'Disponible'),
(7, 'Shopping Avenida', 'Acciones', 'CompraVenta', 250, 'Disponible'),
(8, 'Club Rosa', 'Acciones', 'CompraVenta', 150, 'Disponible'),
(9, 'Club Amarillo', 'Acciones', 'CompraVenta', 100, 'Disponible'),
(10, 'Sociedad de Prestamos', 'Acciones', 'CompraVenta', 150, 'Disponible'),
(11, 'Club Santiago', 'Acciones', 'CompraVenta', 200, 'Disponible'),
(12, 'Sociedad Unidad Ltd', 'Acciones', 'CompraVenta', 300, 'Disponible');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `jugador`
--
ALTER TABLE `jugador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tablero`
--
ALTER TABLE `tablero`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `jugador`
--
ALTER TABLE `jugador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tablero`
--
ALTER TABLE `tablero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
