<?php
    //http://code.tutsplus.com/tutorials/object-oriented-php-for-beginners--net-12762
    class User
    {
        public $id;
        
        public $firstName;
        
        public $lastName;
        
        public function __constructor()
        {
            $id = 0;
            $firstName = "my first name";
            $lastName = "my last name";
            
            echo 'The class "', __CLASS__ ,'" has been instantiated!';
        }
        
        public function __destruct()
        {
            //When the end of a file is reached,
            //PHP automatically released all resources.
        }
        
        public function __toString()
        {
            return $this; 
        }
        
        private function setPassWord($unencrypted)
        {
            
        }
    }
?>