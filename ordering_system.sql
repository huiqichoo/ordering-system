-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2025 at 04:03 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ordering_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `created_at`) VALUES
(1, 'Foods', '2025-08-27 11:45:58'),
(2, 'Drinks', '2025-08-27 11:45:58');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `store_id` int(11) DEFAULT NULL,
  `outlet_id` int(11) DEFAULT NULL,
  `table_id` int(11) DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL,
  `charge_id` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 0,
  `created_by` int(11) DEFAULT NULL,
  `edited_by` int(11) DEFAULT NULL,
  `last_edited` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `store_id`, `outlet_id`, `table_id`, `name`, `charge_id`, `status`, `created_by`, `edited_by`, `last_edited`, `created_at`) VALUES
(1, 1, 1, 4, 'Order-0001', 2, 0, 1, NULL, NULL, '2025-08-27 19:53:04'),
(2, 1, 1, 2, 'Order-0005', 3, 1, 3, NULL, NULL, '2025-08-15 19:53:08'),
(3, 1, 1, 22, 'Order', 1, 0, 1, NULL, '2025-08-28 13:38:28', '2025-08-28 13:38:28'),
(4, 1, 1, 22, 'Order', 1, 0, 1, NULL, '2025-08-28 13:39:28', '2025-08-28 13:39:28'),
(5, 1, 1, 21, 'Order725', 1, 0, 1, NULL, '2025-08-28 13:50:55', '2025-08-28 13:50:55');

-- --------------------------------------------------------

--
-- Table structure for table `order_charges`
--

CREATE TABLE `order_charges` (
  `id` int(11) NOT NULL,
  `store_id` int(11) DEFAULT NULL,
  `outlet_id` int(11) DEFAULT NULL,
  `invoice_no` varchar(30) DEFAULT NULL,
  `total` decimal(20,2) DEFAULT NULL,
  `discount` decimal(20,2) DEFAULT NULL,
  `tax` decimal(20,2) DEFAULT NULL,
  `service` decimal(20,2) DEFAULT NULL,
  `charge` decimal(20,2) DEFAULT NULL,
  `real_charge` decimal(20,2) DEFAULT NULL,
  `rounding` decimal(5,2) DEFAULT NULL,
  `paid` decimal(20,2) DEFAULT NULL,
  `payment_type` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_edited` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` int(11) NOT NULL,
  `orders_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `sku` varchar(50) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `qty` decimal(20,4) DEFAULT NULL,
  `price` decimal(20,2) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_edited` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `orders_id`, `category_id`, `product_id`, `sku`, `name`, `qty`, `price`, `created_by`, `last_edited`, `created_at`) VALUES
(1, 1, 1, 3, 'SKU-0001', 'Order-0001-3', 1.0000, 9.90, 2, NULL, '2025-08-13 19:49:07'),
(2, 1, 1, 4, 'SKU-0002', 'Order-0001-4', 1.0000, 3.50, 2, NULL, '2025-08-22 19:49:11'),
(3, 2, 1, 6, 'SKU-0003', 'Order-0002-6', 1.0000, 10.90, 5, NULL, '2025-08-26 19:49:18'),
(4, 4, 1, 7, 'SKU-4', 'Order Details', 3.0000, 4.96, 1, '2025-08-28 13:39:28', '2025-08-28 13:39:28'),
(5, 5, 1, 3, 'SKU-5', 'Order Details', 1.0000, 867.00, 1, '2025-08-28 13:50:56', '2025-08-28 13:50:56');

-- --------------------------------------------------------

--
-- Table structure for table `outlet`
--

CREATE TABLE `outlet` (
  `outlet_id` int(11) NOT NULL,
  `outlet_name` varchar(100) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `outlet`
--

INSERT INTO `outlet` (`outlet_id`, `outlet_name`, `location`, `created_at`) VALUES
(1, 'Outlet 1', 'Penang', '2025-08-27 11:44:57'),
(2, 'Outlet 2', 'Penang', '2025-08-27 11:44:57');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `store_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `sku` varchar(50) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(20,2) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_edited` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `store_id`, `category_id`, `sku`, `name`, `price`, `created_by`, `last_edited`, `created_at`) VALUES
(1, 1, 1, 'SKU631', 'Mcnuggets', 23.00, 1, '2025-08-28 10:08:03', '2025-08-25 11:41:31'),
(2, 1, 1, 'SKU326', 'Avocado smoothie', 999.00, 1, '2025-08-28 10:07:55', '2025-08-25 12:44:49'),
(3, 1, 1, 'SKU813', 'Popmart', 867.00, 1, '2025-08-28 10:07:48', '2025-08-27 11:07:58'),
(4, 1, 1, 'SKU574', 'Curry mee', 7.90, 1, '2025-08-28 10:07:26', '2025-08-28 10:07:26'),
(5, 1, 1, 'SKU480', 'Nasi lemak', 78.00, 1, '2025-08-28 10:08:13', '2025-08-28 10:08:13'),
(6, 1, 1, 'SKU783', 'Dim sum', 3.44, 1, '2025-08-28 10:08:20', '2025-08-28 10:08:20'),
(7, 1, 1, 'SKU358', 'Milk tea', 4.96, 1, '2025-08-28 10:08:35', '2025-08-28 10:08:35');

-- --------------------------------------------------------

--
-- Table structure for table `restaurant_table`
--

CREATE TABLE `restaurant_table` (
  `id` int(11) NOT NULL,
  `outlet_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurant_table`
--

INSERT INTO `restaurant_table` (`id`, `outlet_id`, `name`, `created_at`) VALUES
(20, 1, 'Table 1', '2025-08-27 11:45:20'),
(21, 1, 'Table 2', '2025-08-27 11:45:20'),
(22, 2, 'Table 3', '2025-08-27 11:45:20'),
(23, 2, 'Table 4', '2025-08-27 11:45:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_charges`
--
ALTER TABLE `order_charges`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `outlet`
--
ALTER TABLE `outlet`
  ADD PRIMARY KEY (`outlet_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `restaurant_table`
--
ALTER TABLE `restaurant_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `order_charges`
--
ALTER TABLE `order_charges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `outlet`
--
ALTER TABLE `outlet`
  MODIFY `outlet_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `restaurant_table`
--
ALTER TABLE `restaurant_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `restaurant_table`
--
ALTER TABLE `restaurant_table`
  ADD CONSTRAINT `restaurant_table_ibfk_1` FOREIGN KEY (`outlet_id`) REFERENCES `outlet` (`outlet_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
