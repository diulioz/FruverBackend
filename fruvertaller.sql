-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-07-2023 a las 22:56:39
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fruvertaller`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalles_pedidos`
--

CREATE TABLE `detalles_pedidos` (
  `idDetalles` int(11) NOT NULL,
  `Pedido_ID` int(11) NOT NULL,
  `Producto_ID` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `Subtotal` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalles_pedidos`
--

INSERT INTO `detalles_pedidos` (`idDetalles`, `Pedido_ID`, `Producto_ID`, `Cantidad`, `Subtotal`) VALUES
(1, 1, 1, 2, '41.98'),
(2, 1, 3, 1, '45.00'),
(3, 2, 2, 1, '35.50'),
(4, 2, 4, 2, '100.00'),
(5, 2, 5, 1, '29.99'),
(6, 1, 1, 3, '41.98');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `idPedido` int(11) NOT NULL,
  `Usuario_ID` int(11) NOT NULL,
  `Fecha` datetime NOT NULL,
  `Confirmado` tinyint(1) NOT NULL DEFAULT 0,
  `Total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`idPedido`, `Usuario_ID`, `Fecha`, `Confirmado`, `Total`) VALUES
(1, 123, '2023-07-25 15:30:00', 1, '40.99'),
(2, 456, '2023-07-26 09:45:00', 0, '80.50'),
(3, 123, '2023-07-25 15:30:00', 1, '40.99');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Descripcion` text NOT NULL,
  `Precio` decimal(10,2) NOT NULL,
  `Cantidad_Disponible` int(11) NOT NULL,
  `Imagen` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `Nombre`, `Descripcion`, `Precio`, `Cantidad_Disponible`, `Imagen`) VALUES
(1, 'Camiseta Roja', 'Camiseta de algodón roja con logotipo estampado', '20.99', 50, 'camiseta_roja.jpg'),
(2, 'Pantalón Azul', 'Pantalón vaquero azul para hombre', '35.50', 30, 'pantalon_azul.jpg'),
(3, 'Vestido Floral', 'Vestido veraniego con estampado floral', '45.00', 20, 'vestido_floral.jpg'),
(4, 'Zapatos Negros', 'Zapatos de cuero negros para mujer', '50.00', 25, 'zapatos_negros.jpg'),
(5, 'Bolso de Cuero', 'Bolso de cuero con correa ajustable', '29.99', 15, 'bolso_cuero.jpg'),
(7, 'Nuevo Producto', 'Descripción actualizada', '29.99', 50, 'nueva_imagen.jpg'),
(8, 'Camiseta Roja2', 'Camiseta de algodón roja con logotipo estampado', '20.99', 50, 'camiseta_roja.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Rol` enum('Cliente','Administrador') NOT NULL,
  `Direccion` varchar(200) DEFAULT NULL,
  `Ciudad` varchar(100) DEFAULT NULL,
  `Telefono` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `Nombre`, `Email`, `Contrasena`, `Rol`, `Direccion`, `Ciudad`, `Telefono`) VALUES
(0, 'Admin', 'admin@example.com', 'adminpass', 'Administrador', NULL, NULL, NULL),
(123, 'Juan Dominguez', 'juan@example.com', 'contraseña123', 'Cliente', 'Calle 123, Colonia Centro', 'Ciudad A', '555-123-4567'),
(456, 'María López', 'maria@example.com', '12345678', 'Cliente', 'Avenida Principal, Barrio X', 'Ciudad B', '444-987-6543');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `detalles_pedidos`
--
ALTER TABLE `detalles_pedidos`
  ADD PRIMARY KEY (`idDetalles`),
  ADD KEY `Pedido_ID` (`Pedido_ID`),
  ADD KEY `Producto_ID` (`Producto_ID`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idPedido`),
  ADD KEY `Usuario_ID` (`Usuario_ID`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `detalles_pedidos`
--
ALTER TABLE `detalles_pedidos`
  MODIFY `idDetalles` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalles_pedidos`
--
ALTER TABLE `detalles_pedidos`
  ADD CONSTRAINT `detalles_pedidos_ibfk_1` FOREIGN KEY (`Pedido_ID`) REFERENCES `pedidos` (`idPedido`),
  ADD CONSTRAINT `detalles_pedidos_ibfk_2` FOREIGN KEY (`Producto_ID`) REFERENCES `productos` (`idProducto`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`Usuario_ID`) REFERENCES `usuarios` (`idUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
