CREATE DATABASE IF NOT EXISTS advoline;

DROP USER IF EXISTS 'advoline_db_root'@'%';
CREATE USER 'advoline_db_root'@'%' IDENTIFIED WITH mysql_native_password BY 'uk123456yp654321';
GRANT ALL ON advoline.* TO 'advoline_db_root'@'%';
FLUSH PRIVILEGES;
