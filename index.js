import MainBody from "./public/MainBody.js";
import Sidebar from "./public/Sidebar.js";

(function ($) {
    $('#homeScreen').append(`
   
    <button type="button" class="btn btn-light" id="medical-review-btn">
        <img src="./public/images/medically-reviewed.png" alt="medical-review"> Medically Reviewed
    </button>
    
    <div class="row mt-2">
        <div class="col-8">
            ${MainBody()}
        </div>
        <div class="col-4">
            ${Sidebar()}
        </div>
    </div>
    `);
})($);