var app = angular.module('app', ['ngSanitize', 'colorpicker.module', 'ui.bootstrap']);

app.controller('FormatController', function ($scope, $sce) {
  $scope.upicked = '1';
  $scope.cpicked = '#5BC0DE';
  $scope.hpicked = '1';
  $scope.fpicked = 'Arial';

  $scope.article = '';
  // $scope.article += 'Texte\n[b]Texte[/b]\n[i]Texte[/i]\n[u]Texte[/u]\n[s]Texte[/s]\n[color=red]Texte[/color][hr]\n\n';
  // $scope.article += '[font=Arial]Texte[/font]\n[url]http://www.wikipedia.fr[/url]\n[url=http://www.wikipedia.com]Wikipedia[/url][hr]\n\n';
  // $scope.article += '[img]http://www.yrph.com/en/images/top/image01_top.jpg[/img]\n[quote=Leto II]Mon voisin Totoro est un film d\'animation japonais réalisé par Hayao Miyazaki et produit par le studio Ghibli sorti au Japon le 16 avril 1988.\nIl est récompensé la même année par le prix Mainichi Noburō Ōfuji.\nCe film a été diffusé pour la première fois en France lors du Festival du cinéma pour enfant de Corbeil-Essonnes en 19921. Il fut ensuite publié en VHS (TF1 Vidéo) en juillet 1999 quelques mois avant de sortir en salles dans toute la France au cinéma le 8 décembre 19992, avant une ressortie en 2002. Quant au DVD, son édition française est disponible depuis le 26 juillet 2006, et le Blu-ray est disponible depuis le 13 juillet 2013.[/quote][hr]\n\n';
  // $scope.article += 'Texte[sub]Indice[/sub]\nTexte[sup]Exposant[/sup][hr]\n\n';
  // $scope.article += '[title=1]Text[/title]\n[title=2]Text[/title]\n[title=3]Text[/title]\n[title=4]Text[/title]\n[title=5]Text[/title]\n[title=6]Text[/title][hr]';
  // $scope.article += '[left]Ce film a été diffusé pour la première fois en France lors du Festival du cinéma pour enfant de Corbeil-Essonnes en 19921. Il fut ensuite publié en VHS (TF1 Vidéo) en juillet 1999 quelques mois avant de sortir en salles dans toute la France au cinéma le 8 décembre 19992, avant une ressortie en 2002. Quant au DVD, son édition française est disponible depuis le 26 juillet 2006, et le Blu-ray est disponible depuis le 13 juillet 2013.[/left]\n\n';
  // $scope.article += '[right]Ce film a été diffusé pour la première fois en France lors du Festival du cinéma pour enfant de Corbeil-Essonnes en 19921. Il fut ensuite publié en VHS (TF1 Vidéo) en juillet 1999 quelques mois avant de sortir en salles dans toute la France au cinéma le 8 décembre 19992, avant une ressortie en 2002. Quant au DVD, son édition française est disponible depuis le 26 juillet 2006, et le Blu-ray est disponible depuis le 13 juillet 2013.[/right]\n\n';
  // $scope.article += '[center]Ce film a été diffusé pour la première fois en France lors du Festival du cinéma pour enfant de Corbeil-Essonnes en 19921. Il fut ensuite publié en VHS (TF1 Vidéo) en juillet 1999 quelques mois avant de sortir en salles dans toute la France au cinéma le 8 décembre 19992, avant une ressortie en 2002. Quant au DVD, son édition française est disponible depuis le 26 juillet 2006, et le Blu-ray est disponible depuis le 13 juillet 2013.[/center]\n\n';
  // $scope.article += '[justify]Ce film a été diffusé pour la première fois en France lors du Festival du cinéma pour enfant de Corbeil-Essonnes en 19921. Il fut ensuite publié en VHS (TF1 Vidéo) en juillet 1999 quelques mois avant de sortir en salles dans toute la France au cinéma le 8 décembre 19992, avant une ressortie en 2002. Quant au DVD, son édition française est disponible depuis le 26 juillet 2006, et le Blu-ray est disponible depuis le 13 juillet 2013.[/justify]\n\n';
  // $scope.article += '[quote=Leto II]Totoro est, selon Wikipedia :\n[quote=Wikipedia]Ce film a été diffusé pour la première fois en France lors du Festival du cinéma pour enfant de Corbeil-Essonnes en 19921.[/quote]\nC\'est mon film préféré.[/quote]';

  $scope.format = function (article) {
    var formated = $scope.article;
    
    formated = '<p>' + formated + '</p>';
    formated = formated.replace(/\n+/g, '</p><p>');
    
    formated = formated.replace(/\[b\]([\s\S]*?)\[\/b\]/g, '<strong>$1</strong>');
    formated = formated.replace(/\[i\]([\s\S]*?)\[\/i\]/g, '<em>$1</em>');
    formated = formated.replace(/\[u\]([\s\S]*?)\[\/u\]/g, '<ins>$1</ins>');
    formated = formated.replace(/\[s\]([\s\S]*?)\[\/s\]/g, '<del>$1</del>');
    formated = formated.replace(/\[color=([a-z]*?)\]([\s\S]*?)\[\/color\]/g, '<span style="color: $1;">$2</span>');
    formated = formated.replace(/\[color=(#[0-9a-fA-F]*?)\]([\s\S]*?)/g, '<span style="color: $1;">$2');
    formated = formated.replace(/\[\/color\]/g, '</span>');

    formated = formated.replace(/\[font=(.+?)\]([\s\S]*?)\[\/font\]/g, '<span style="font-family: $1;">$2</span>');
    formated = formated.replace(/\[url\]([\s\S]*?)\[\/url\]/g, '<a href="$1">$1</a>');
    formated = formated.replace(/\[url=(.+?)\]([\s\S]*?)\[\/url\]/g, '<a href="$1">$2</a>');

    formated = formated.replace(/\[img\]([\s\S]*?)\[\/img\]/g, '<img class="img-rounded" src="$1" />');
    formated = formated.replace(/\[quote=?(.*?)\]([\s\S]*?)/g, '</p><div class="bs-callout bs-callout-info"><h4>Citation $1 :</h4><p>$2');
    formated = formated.replace(/\[\/quote\]/g, '</p></div><p>');
    formated = formated.replace(/\[abbr=?(.*?)\]([\s\S]*?)\[\/abbr\]/g, '<abbr title="$1">$2</abbr>');

    formated = formated.replace(/\[sub\]([\s\S]*?)\[\/sub\]/g, '<sub>$1</sub>');
    formated = formated.replace(/\[sup\]([\s\S]*?)\[\/sup\]/g, '<sup>$1</sup>');

    formated = formated.replace(/\[title=([1-6])\]([\s\S]*?)\[\/title\]/g, '<h$1>$2</h$1>');

    formated = formated.replace(/\[left\]([\s\S]*?)\[\/left\]/g, '<p class="text-left">$1</p>');
    formated = formated.replace(/\[right\]([\s\S]*?)\[\/right\]/g, '<p class="text-right">$1</p>');
    formated = formated.replace(/\[center\]([\s\S]*?)\[\/center\]/g, '<p class="text-center">$1</p>');
    formated = formated.replace(/\[justify\]([\s\S]*?)\[\/justify\]/g, '<p class="text-justify">$1</p>');

    formated = formated.replace(/\[hr\]/g, '<hr>');

    //var accordionStr = '<accordion ng-init="spoilerOpened=true"><accordion-group is-open="spoilerOpened"><accordion-heading>Spoiler <i class="pull-right glyphicon" ng-class="{\'glyphicon-chevron-down\': spoilerOpened, \'glyphicon-chevron-right\': !spoilerOpened}"></i></accordion-heading>$1</accordion-group></accordion>';
    var accordionStr = '<div class="panel-group" id="accordion"><div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Spoiler</a></h4></div><div id="collapseOne" class="panel-collapse collapse"><div class="panel-body">$1</div></div></div></div>';
    formated = formated.replace(/\[spoiler\]([\s\S]*?)\[\/spoiler\]/g, accordionStr);

    return $sce.trustAsHtml(formated);
  };

  $scope.setUPickedAndClick = function (i) {
    $scope.upicked = i;
    $scope.addTagSel('url');
  }

  $scope.setHPickedAndClick = function (i) {
    $scope.hpicked = i;
    $scope.addTagSel('title');
  }

  $scope.setFPickedAndClick = function (i) {
    $scope.fpicked = i;
    $scope.addTagSel('font');
  }

  $scope.addTagSel = function (tag) {
    // http://CoursesWeb.net/javascript/
    var tag_type = new Array('[', ']');
    var txta = document.getElementById('editor');
    var option = '';
    if (tag === 'color')
      option = '=' + $scope.cpicked;
    else if (tag === 'title')
      option = '=' + $scope.hpicked;
    else if (tag === 'font')
      option = '=' + $scope.fpicked;
    else if (tag === 'quote')
      option = '=';
    var start = tag_type[0] + tag + option + tag_type[1];
    var end = '';
    if (tag !== 'hr')
      end = tag_type[0] +'/'+ tag +  tag_type[1];
    var IE = /*@cc_on!@*/false;                   // this variable is false in all browsers, except IE

    if (IE) {
      var r = document.selection.createRange();
      var tr = txta.createTextRange();
      var tr2 = tr.duplicate();
      tr2.moveToBookmark(r.getBookmark());
      tr.setEndPoint('EndToStart',tr2);
      var tag_seltxt = start + r.text + end;
      var the_start = txta.value.replace(/[\r\n]/g,'.').indexOf(r.text.replace(/[\r\n]/g,'.'),tr.text.length);
      txta.value = txta.value.substring(0, the_start) + tag_seltxt + txta.value.substring(the_start + tag_seltxt.length, txta.value.length);

      var pos = txta.value.length - end.length;   // Sets location for cursor position
      tr.collapse(true);
      tr.moveEnd('character', pos);               // start position
      tr.moveStart('character', pos);             // end position
      tr.select();                                // selects the zone
    } else if (txta.selectionStart || txta.selectionStart == "0") {
      var startPos = txta.selectionStart;
      var endPos = txta.selectionEnd;
      var tag_seltxt;
      if ((tag === 'url' && $scope.upicked === '2') || tag === 'abbr') {
        start = tag_type[0] + tag + '=' + txta.value.substring(startPos, endPos) + tag_type[1];
        tag_seltxt = start + end;
      } else {
        tag_seltxt = start + txta.value.substring(startPos, endPos) + end;
      }
      txta.value = txta.value.substring(0, startPos) + tag_seltxt + txta.value.substring(endPos, txta.value.length);

      // Place the cursor between formats in #txta
      txta.setSelectionRange((endPos+start.length),(endPos+start.length));
      txta.focus();
    }
    return tag_seltxt;
  };
});
