import MainBody from "./public/MainBody.js";
import Sidebar from "./public/Sidebar.js";

(function ($) {
    $('#homeScreen').append(`
<br>
   
    <button type="button" class="btn btn-outline-light" id="medical-review-btn">
        <i class="fas fa-clinic-medical"></i>  &nbsp; Medically Reviewed
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