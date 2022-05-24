<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'databaseconnect.php';
$objDB = new DBConnect;
$conn = $objDB->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method){

    case "GET":
        $sql = "SELECT * FROM property";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[2]) && is_numeric($path[2])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[2]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($users);
        break;

    case "POST":
        $property = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO property(id, nama, alamat, harga, kamar, toilet, luas, created_at) VALUES(null, :nama, :alamat, :harga, :kamar, :toilet, :luas, :created_at)";
        $stmt = $conn->prepare($sql);
        $created_at = date('Y-m-d');
        $stmt->bindParam(':nama', $property->nama);
        $stmt->bindParam(':alamat', $property->alamat);
        $stmt->bindParam(':harga', $property->harga);
        $stmt->bindParam(':kamar', $property->kamar);
        $stmt->bindParam(':toilet', $property->toilet);
        $stmt->bindParam(':luas', $property->luas);
        $stmt->bindParam(':created_at', $created_at);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record Created Succesfuly'];
        }
        else{
            $response = ['status' => 0, 'message' => 'Failed to Create Record'];
        }
        break;

    case "PUT":
        $property = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE property SET nama= :nama, alamat= :alamat, harga= :harga, kamar= :kamar, toilet= :toilet, luas= :luas, updated_at= :updated_at WHERE id= :id";
        $stmt = $conn->prepare($sql);
        $updated_at = date('Y-m-d');
        $stmt->bindParam(':id', $property->id);
        $stmt->bindParam(':nama', $property->nama);
        $stmt->bindParam(':alamat', $property->alamat);
        $stmt->bindParam(':harga', $property->harga);
        $stmt->bindParam(':kamar', $property->kamar);
        $stmt->bindParam(':toilet', $property->toilet);
        $stmt->bindParam(':luas', $property->luas);
        $stmt->bindParam(':updated_at', $updated_at);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record Updated Succesfuly'];
        }
        else{
            $response = ['status' => 0, 'message' => 'Failed to Update Record'];
        }
        break;

    case "DELETE":

        $sql = "DELETE FROM property WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);
       
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[2]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted Succesfuly'];
        }
        else{
            $response = ['status' => 0, 'message' => 'Failed to delete Record'];
        }
        echo json_encode($users);
        break;
        
}