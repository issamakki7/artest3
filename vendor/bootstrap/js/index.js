const image_input = document.querySelector("#image-input");
const displayImage = document.getElementById("displayimage");
document.getElementById("displayimage").style.backgroundImage = `url(../static/img/new.jpg)`;
document.getElementById("displayimage").style.margin = `2.5em 0em 1em 13em` ;


image_input.addEventListener("change", function() {
  document.getElementById("displayimage").style.margin = `1em 0em 1em 8em` ;

  const reader = new FileReader();

  reader.onload = (e) => {
    const image = new Image();
    image.src = e.target.result;
    image.onload = () => {

      const {height,width} = image;

      if(width>900){
        document.getElementById("displayimage").style.width = `900px`;
        if(height>600){
            document.getElementById("displayimage").style.height = `600px` ;
        }
        else if(height<600){
            document.getElementById("displayimage").style.height = `${height}px` ;
        }
      }
      else if(width<900){
        document.getElementById("displayimage").style.width = `${width}px`;
      }

      if(height>600){
        document.getElementById("displayimage").style.height = `600px` ;
        if(width>900){
            document.getElementById("displayimage").style.width = `900px`;
        }
        else if(width<900){
            document.getElementById("displayimage").style.width = `${width}px`;
        }
    }
    else if(height<600){
        document.getElementById("displayimage").style.height = `${height}px` ;
    }



    //   else{
    //     document.getElementById("displayimage").style.width = `${width}px`;
    //     document.getElementById("displayimage").style.height = `${height}px` ;
    //   }

    }
}

  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    reader.readAsDataURL(image_input.files[0]);
    document.getElementById("displayimage").style.backgroundImage = `url(${uploaded_image})` ;
  });
  reader.readAsDataURL(this.files[0]);
});
