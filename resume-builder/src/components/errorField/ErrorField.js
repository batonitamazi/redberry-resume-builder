import React from "react";

function ErrorField({ errors, touched }) {
    if(errors && touched){
        return(
            <div className="error_message">
                {errors}
            </div>
        )
    }else{
        return null;
    }

}

export default ErrorField;
