(function () {
  var button = document.querySelector('#startButton');
  button.addEventListener('click', onButtonClick);

  function onButtonClick (e) {
  e.preventDefault();
  button.removeEventListener('click', onButtonClick);
  button.classList.add('hidden');

  var cont = document.querySelector('#playerCont');
  cont.innerHTML = playerTemplate();
  cont.classList.remove('hidden');

  window.tvigle.createPlayers(null, 'brandNewPlayer');
  }

  function playerTemplate () {
    return [
      '<object id="brandNewPlayer" class="TviglePlayer" itemprop="video" type="application/x-shockwave-flash" width="756" height="420">',
        '<param name="width" value="756" />',
        '<param name="partnerId" value="2181" />',
        '<param name="id" value="5220799" />',
        '<param name="height" value="420" />',
        '<param name="useAPI" value="true">',
        //'<param name="templateLoadHandler" value="TviglePlayerProxy.onLoaded">',
        //'<param name="eventHandler" value="TviglePlayerProxy.eventHandler">'
      '</object>'
    ].join('');
  }  
})();
