(function($){var $thumbGalleryDetailR=$('#thumbGalleryDetailR'),$thumbGalleryThumbsT=$('#thumbGalleryThumbsT'),flag=false,duration=300;$thumbGalleryDetailR.owlCarousel({items:1,margin:5,nav:true,dots:false,loop:false,navText:[],rtl:($('html').attr('dir')=='rtl')?true:false}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryThumbsT.trigger('to.owl.carousel',[e.item.index-1,duration,true]);flag=false;}});$thumbGalleryThumbsT.owlCarousel({margin:15,items:8,nav:false,center:false,dots:false,rtl:($('html').attr('dir')=='rtl')?true:false}).on('click','.owl-item',function(){$thumbGalleryDetailR.trigger('to.owl.carousel',[$(this).index(),duration,true]);}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryDetailR.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});var $thumbGalleryDetail1=$('#thumbGalleryDetail1'),$thumbGalleryThumbs1=$('#thumbGalleryThumbs1'),flag=false,duration=300;$thumbGalleryDetail1.owlCarousel({items:1,margin:10,nav:true,dots:false,loop:true,navText:[],rtl:($('html').attr('dir')=='rtl')?true:false}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryThumbs1.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});$thumbGalleryThumbs1.owlCarousel({margin:15,items:8,nav:false,center:true,dots:false,rtl:($('html').attr('dir')=='rtl')?true:false}).on('click','.owl-item',function(){$thumbGalleryDetail1.trigger('to.owl.carousel',[$(this).index(),duration,true]);}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryDetail1.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});var $thumbGalleryDetail2=$('#thumbGalleryDetail2'),$thumbGalleryThumbs2=$('#thumbGalleryThumbs2'),flag=false,duration=300;$thumbGalleryDetail2.owlCarousel({items:1,margin:10,nav:true,dots:false,loop:false,navText:[],rtl:($('html').attr('dir')=='rtl')?true:false}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryThumbs2.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});$thumbGalleryThumbs2.owlCarousel({margin:15,items:8,nav:false,center:true,dots:false,rtl:($('html').attr('dir')=='rtl')?true:false}).on('click','.owl-item',function(){$thumbGalleryDetail2.trigger('to.owl.carousel',[$(this).index(),duration,true]);}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryDetail2.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});var $thumbGalleryDetail3=$('#thumbGalleryDetail3'),$thumbGalleryThumbs3=$('#thumbGalleryThumbs3'),flag=false,duration=300;$thumbGalleryDetail3.owlCarousel({items:1,margin:10,nav:true,dots:false,loop:false,navText:[],rtl:($('html').attr('dir')=='rtl')?true:false}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryThumbs3.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});$thumbGalleryThumbs3.owlCarousel({margin:15,items:8,nav:false,center:true,dots:false,rtl:($('html').attr('dir')=='rtl')?true:false}).on('click','.owl-item',function(){$thumbGalleryDetail3.trigger('to.owl.carousel',[$(this).index(),duration,true]);}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryDetail3.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});var $thumbGalleryDetail4=$('#thumbGalleryDetail4'),$thumbGalleryThumbs4=$('#thumbGalleryThumbs4'),flag=false,duration=300;$thumbGalleryDetail4.owlCarousel({items:1,margin:10,nav:true,dots:false,loop:false,navText:[],rtl:($('html').attr('dir')=='rtl')?true:false}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryThumbs4.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});$thumbGalleryThumbs4.owlCarousel({margin:15,items:8,nav:false,center:true,dots:false,rtl:($('html').attr('dir')=='rtl')?true:false}).on('click','.owl-item',function(){$thumbGalleryDetail4.trigger('to.owl.carousel',[$(this).index(),duration,true]);}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryDetail4.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});var $thumbGalleryDetail5=$('#thumbGalleryDetail5'),$thumbGalleryThumbs5=$('#thumbGalleryThumbs5'),flag=false,duration=300;$thumbGalleryDetail5.owlCarousel({items:1,margin:10,nav:true,dots:false,loop:false,navText:[],rtl:($('html').attr('dir')=='rtl')?true:false}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryThumbs5.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});$thumbGalleryThumbs5.owlCarousel({margin:15,items:8,nav:false,center:true,dots:false,rtl:($('html').attr('dir')=='rtl')?true:false}).on('click','.owl-item',function(){$thumbGalleryDetail5.trigger('to.owl.carousel',[$(this).index(),duration,true]);}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryDetail5.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});var $thumbGalleryDetail6=$('#thumbGalleryDetail6'),$thumbGalleryThumbs6=$('#thumbGalleryThumbs6'),flag=false,duration=300;$thumbGalleryDetail6.owlCarousel({items:1,margin:10,nav:true,dots:false,loop:false,navText:[],rtl:($('html').attr('dir')=='rtl')?true:false}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryThumbs6.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});$thumbGalleryThumbs6.owlCarousel({margin:15,items:8,nav:false,center:true,dots:false,rtl:($('html').attr('dir')=='rtl')?true:false}).on('click','.owl-item',function(){$thumbGalleryDetail6.trigger('to.owl.carousel',[$(this).index(),duration,true]);}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryDetail6.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});var $thumbGalleryDetail7=$('#thumbGalleryDetail7'),$thumbGalleryThumbs7=$('#thumbGalleryThumbs7'),flag=false,duration=300;$thumbGalleryDetail7.owlCarousel({items:1,margin:10,nav:true,dots:false,loop:false,navText:[],rtl:($('html').attr('dir')=='rtl')?true:false}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryThumbs7.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});$thumbGalleryThumbs7.owlCarousel({margin:15,items:8,nav:false,center:true,dots:false,rtl:($('html').attr('dir')=='rtl')?true:false}).on('click','.owl-item',function(){$thumbGalleryDetail7.trigger('to.owl.carousel',[$(this).index(),duration,true]);}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryDetail7.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});var $thumbGalleryDetail8=$('#thumbGalleryDetail8'),$thumbGalleryThumbs8=$('#thumbGalleryThumbs8'),flag=false,duration=300;$thumbGalleryDetail8.owlCarousel({items:1,margin:10,nav:true,dots:false,loop:false,navText:[],rtl:($('html').attr('dir')=='rtl')?true:false}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryThumbs8.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});$thumbGalleryThumbs8.owlCarousel({margin:15,items:8,nav:false,center:true,dots:false,rtl:($('html').attr('dir')=='rtl')?true:false}).on('click','.owl-item',function(){$thumbGalleryDetail8.trigger('to.owl.carousel',[$(this).index(),duration,true]);}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryDetail8.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});var $thumbGalleryDetail9=$('#thumbGalleryDetail9'),$thumbGalleryThumbs9=$('#thumbGalleryThumbs9'),flag=false,duration=300;$thumbGalleryDetail9.owlCarousel({items:1,margin:10,nav:true,dots:false,loop:false,navText:[],rtl:($('html').attr('dir')=='rtl')?true:false}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryThumbs9.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});$thumbGalleryThumbs9.owlCarousel({margin:15,items:8,nav:false,center:true,dots:false,rtl:($('html').attr('dir')=='rtl')?true:false}).on('click','.owl-item',function(){$thumbGalleryDetail9.trigger('to.owl.carousel',[$(this).index(),duration,true]);}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryDetail9.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});var $thumbGalleryDetail10=$('#thumbGalleryDetail10'),$thumbGalleryThumbs10=$('#thumbGalleryThumbs10'),flag=false,duration=300;$thumbGalleryDetail10.owlCarousel({items:1,margin:10,nav:true,dots:false,loop:false,navText:[],rtl:($('html').attr('dir')=='rtl')?true:false}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryThumbs10.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});$thumbGalleryThumbs10.owlCarousel({margin:15,items:8,nav:false,center:true,dots:false,rtl:($('html').attr('dir')=='rtl')?true:false}).on('click','.owl-item',function(){$thumbGalleryDetail10.trigger('to.owl.carousel',[$(this).index(),duration,true]);}).on('changed.owl.carousel',function(e){if(!flag){flag=true;$thumbGalleryDetail10.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});}).apply(this,[jQuery]);