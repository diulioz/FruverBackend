-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-08-2023 a las 03:32:19
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
(2, 1, 3, 1, '45.00'),
(3, 2, 2, 1, '35.50'),
(4, 2, 4, 2, '100.00'),
(5, 2, 5, 1, '29.99'),
(6, 1, 1, 3, '41.98'),
(15, 11, 2, 4, '142.00'),
(34, 30, 4, 2, '100.00'),
(35, 31, 2, 2, '71.00'),
(36, 32, 2, 2, '71.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `idPedido` int(11) NOT NULL,
  `Usuario_ID` int(11) NOT NULL,
  `Fecha` datetime NOT NULL,
  `Confirmado` int(11) NOT NULL DEFAULT 0,
  `Total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`idPedido`, `Usuario_ID`, `Fecha`, `Confirmado`, `Total`) VALUES
(1, 123, '2023-07-25 15:30:00', 1, '40.99'),
(2, 456, '2023-07-26 09:45:00', 1, '80.50'),
(11, 456, '2023-08-01 02:46:58', 1, '106.50'),
(30, 456, '2023-08-01 16:28:07', 0, '100.00'),
(31, 456, '2023-08-01 20:18:15', 2, '71.00'),
(32, 456, '2023-08-01 23:30:25', 2, '71.00');

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
  `Imagen` varchar(200) DEFAULT NULL,
  `Categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `Nombre`, `Descripcion`, `Precio`, `Cantidad_Disponible`, `Imagen`, `Categoria`) VALUES
(1, 'Naranja', 'La naranja es una fruta cítrica de forma redonda o elipsoidal, conocida por su sabor dulce y refrescante. Es rica en vitamina C, lo que la convierte en una excelente opción para fortalecer el sistema inmunológico y mantener una piel saludable.', '20.99', 15, 'naranja-1.jpg', 'Frutas'),
(2, 'Cebolla', 'La cebolla es una hortaliza bulbosa ampliamente utilizada en la cocina de diferentes culturas. Tiene un sabor característico y puede variar en tamaño y color. Es una fuente de antioxidantes y nutrientes beneficiosos para la salud.', '35.50', 16, 'cebolla.jpg', 'Vegetales'),
(3, 'Papa', 'La papa, también conocida como patata, es un tubérculo originario de América del Sur. Es un alimento básico en muchas dietas y se puede preparar de diversas formas, como hervida, frita, asada o al horno. Es rica en carbohidratos, vitaminas y minerales.', '45.00', 20, 'papa.jpg', 'Vegetales'),
(4, 'Mango', 'El mango es una fruta tropical de pulpa jugosa y dulce, con un sabor distintivo y refrescante. Es una excelente fuente de vitamina C, vitamina A y fibra, y se utiliza en diversas preparaciones culinarias, como ensaladas, salsas y postres.', '50.00', 16, 'mango.jpg', 'Frutas'),
(5, 'Fresa', 'La fresa es una fruta pequeña y roja con un sabor agridulce y refrescante. Es conocida por su alto contenido de vitamina C, antioxidantes y fibra. Se consume fresca, en jugos, mermeladas o como complemento en postres y ensaladas.', '29.99', 20, 'fresa.jpg', 'Frutas'),
(18, 'Banano', 'El banano, también conocido como plátano, es una fruta de pulpa suave y dulce que se presenta en racimos. Es una excelente fuente de potasio y carbohidratos, proporcionando energía rápida y ayudando a mantener el equilibrio hídrico del cuerpo. Es una de las frutas más populares y versátiles en la dieta diaria.', '1.00', 20, 'banano.jpg', 'Frutas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Rol` enum('Cliente','Administrador') DEFAULT NULL,
  `Direccion` varchar(200) DEFAULT NULL,
  `Ciudad` varchar(100) DEFAULT NULL,
  `Telefono` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `Nombre`, `Email`, `Contrasena`, `Rol`, `Direccion`, `Ciudad`, `Telefono`) VALUES
(0, 'Admin', 'pruebascorreopersonal@outlook.com', '123', 'Administrador', NULL, NULL, NULL),
(123, 'Juan Dominguez', 'pruebasmail.personal@gmail.com', '123', 'Cliente', 'Calle 123, Colonia Centro', 'Ciudad A', '555-123-4567'),
(456, 'María López', 'pruebasmail.personal@gmail.com', '123', 'Cliente', 'Avenida Principal, Barrio X', 'Ciudad B', '444-987-6543');

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
  MODIFY `idDetalles` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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
