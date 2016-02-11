<?php
    class dbConnect
    {
        public $host;
        
        public $user;
        
        public $password;
        
        public $connection;
                      
        public function __constructor()
        {
            $host = '';
            $user = '';
            $password = '';
        }
        
        public function __destructor()
        {
            
        }
        
        public function createConnection()
        {
            $connection = mysql_connect($host, $user, $password);
            return $connection;
        }
    }

?>