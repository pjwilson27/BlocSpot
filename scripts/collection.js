var buildCollectionItemTemplate = function() {
    var template =

    '<div class="collection-album-container column fourth">'
    + '<img src="assets/images/album_covers/01.png"/>'
    + '<p>'
    + '<a class="album-name" href="../Blocspot/album.html"> The Colors </a>'
    + '<br/>'
    + '<a href="../Blocspot/album.html"> Pablo Picasso </a>'
    + '<br/>'
    + 'X songs'
    + '<br/>'
    + '</p>'
    + '</div>'
    + '</div>'
    ;
return $(template);

};



$(window).load(function() {
    //#1
    
    //#2
        
    //#3
    var $collectionContainer = $('.album-covers');
    $collectionContainer.empty();
    
    for (var i = 0; i < 12; i++) {
        var $newThumbnail = buildCollectionItemTemplate();
    }
    
    $collectionContainer.append($newThumbnail);



});