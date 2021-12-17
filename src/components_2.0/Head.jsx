import React from "react";
const Header =()=>{
    return(
        <nav class ="navbar navbar-expand-lg navbar-dark bg-dark myclass" > 
            <div class="container-fluid">
                
                    <a class ="navbar-brand" href ='#'>Vlad</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>


                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class ="navbar-nav">
                        
                        <li class ="nav-item"><a class="nav-link active" href = "#">Главная</a></li>
                        <li class ="nav-item"><a class="nav-link" href = "#">Часть 1</a></li>
                        <li class ="nav-item"><a class="nav-link" href = "#">Часть2</a></li>
                    </ul>


        
            </div>
        </div>
        </nav>
    );
}
export default Header;