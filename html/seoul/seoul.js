 $('.lb-weather').hide();
  $('#lb-1').show();
  $('#select-box').change(function () {
    dropdown = $('#select-box').val();
    $('.lb-weather').hide();
    $('#' + "lb-" + dropdown).show();                                    
  });
  
  //30초 마다 새로고침
  $(document).ready(function () {
    setTimeout(
      function () {
        window.location.reload(1);
      },
      1500000
    );
  });

  $(document).ready(function(){
          /*웹페이지 열었을 때*/
          $("#imgID1").show();
          $("#imgID2").hide();
          $("#imgID3").hide();

          $("#imgID1").click(function(){
              $("#imgID1").hide();
              $("#imgID2").show();
              $("#imgID3").hide();
          });
          $("#imgID2").click(function(){
              $("#imgID1").hide();
              $("#imgID2").hide();
              $("#imgID3").show();
          });
          $("#imgID3").click(function(){
              $("#imgID1").show();
              $("#imgID2").hide();
              $("#imgID3").hide();
          });
  });

