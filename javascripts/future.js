$(document).ready(function() {

  $(".figs"+currentCell).offset({ top: getYPositionOfElement(), left: getXPositionOfElement() });

  function getXPositionOfElement() {
    var x_position = Math.floor(Math.random() * window.innerWidth);
    return x_position;
  });

  function getYPositionOfElement() {
    var y_position = Math.floor(Math.random() * window.innerHeight);
    return y_position;
  });

  function putPazzleInRandomXYCoordinats(){
    for(var k=0; k<100; k++){
        getXPositionOfElement();
        getYPositionOfElement();
        $('.figs'+k).offset({ top: getYPositionOfElement(), left: getXPositionOfElement() });
        alert(y_position);
    });
  });
});
