// $(document).ready(function(){
            //     $('#mycarousel').carousel({
            //         interval:1000 
            //     });
            // });
            $(document).ready(function(){
                $('#carouselButton').click(function(){
                    if($('#carouselButton').children('span').hasClass('fa-pause')){
                        $('#mycarousel').carousel('pause');
                        $('#carouselButton').children('span').removeClass('fa-pause');
                        $('#carouselButton').children('span').addClass('fa-play');
                    }
                    else{
                        $('#mycarousel').carousel('cycle');
                        $('#carouselButton').children('span').removeClass('fa-play');
                        $('#carouselButton').children('span').addClass('fa-pause');
                    }
                });
            });
            $('#loginSign').click(function(){
                
                $('#loginModal').modal('show');
            });

            $('#reserveButton').click(function(){
                
                $('#reservationModal').modal('show');
            });