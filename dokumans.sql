-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2022 at 11:21 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dokumans`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_dokumen`
--

CREATE TABLE `tbl_dokumen` (
  `id_doku` varchar(50) NOT NULL,
  `jenis` varchar(20) DEFAULT NULL,
  `kategori` varchar(20) DEFAULT NULL,
  `no_doku` varchar(60) DEFAULT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `revisi` int(2) DEFAULT NULL,
  `keterangan` text DEFAULT NULL,
  `filepath` varchar(255) DEFAULT NULL,
  `tgl_terbit` datetime DEFAULT NULL,
  `tgl_revisi` datetime DEFAULT NULL,
  `tgl_expired` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_dokumen`
--

INSERT INTO `tbl_dokumen` (`id_doku`, `jenis`, `kategori`, `no_doku`, `judul`, `revisi`, `keterangan`, `filepath`, `tgl_terbit`, `tgl_revisi`, `tgl_expired`, `createdAt`, `updatedAt`) VALUES
('20221206085851', 'Formulir', 'ISO9001', 'RAB-FRM-120601', 'Tes Add Dokumen Formulir ISO', 0, NULL, '', '2022-12-06 07:00:00', NULL, NULL, '2022-12-06 15:58:51', '2022-12-06 15:58:51');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_hak_akses`
--

CREATE TABLE `tbl_hak_akses` (
  `id_hak` int(11) NOT NULL,
  `nm_hak` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_hak_akses`
--

INSERT INTO `tbl_hak_akses` (`id_hak`, `nm_hak`) VALUES
(1, 'Super Admin'),
(2, 'Admin'),
(3, 'Operator');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id_user` int(11) NOT NULL,
  `nama` varchar(60) DEFAULT NULL,
  `uname` varchar(20) DEFAULT NULL,
  `passw` varchar(255) DEFAULT NULL,
  `id_hak` int(11) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id_user`, `nama`, `uname`, `passw`, `id_hak`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'Afif', 'afdi', '$2b$10$Bbfji7f848NsPJjgCg.k4.8xyVarz.Tdkd61QqUpurjnnsMWW0pyC', NULL, NULL, '2022-11-11 15:10:52', '2022-11-11 15:10:52'),
(2, 'AdminQA', 'admin', '$2b$10$iwzlVb1v5pmS3OyW72KStuyjQKOAxOBA.DrFyThUh8wo232LVBDtO', NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWEiOiJBZG1pblFBIiwidW5hbWUiOiJhZG1pbiIsImlhdCI6MTY3MDQ0NzgxNCwiZXhwIjoxNjcwNTM0MjE0fQ.L0hZqwjEk7JM01Nnss52AIofb4CoX8EBwHSwSrx3LSE', '2022-11-11 15:15:43', '2022-12-08 04:16:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_dokumen`
--
ALTER TABLE `tbl_dokumen`
  ADD PRIMARY KEY (`id_doku`);

--
-- Indexes for table `tbl_hak_akses`
--
ALTER TABLE `tbl_hak_akses`
  ADD PRIMARY KEY (`id_hak`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_hak_akses`
--
ALTER TABLE `tbl_hak_akses`
  MODIFY `id_hak` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
