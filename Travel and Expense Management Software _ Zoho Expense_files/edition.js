"use strict";function getCurrentEdition(){var i=window.location.href.split("/")[3];return-1!==["uk","us","ca","au","in","sa","ae","om","bh","de-de","es-mx","ke","za"].indexOf(i)?i:"global"}function validateEdition(i){return-1!==["uk","us","ca","au","global","in","sa","ae","om","bh","de-de","es-mx","ke","za"].indexOf(i)}function setCookie(i,o,e){var n=new Date,t=o;n.setDate(n.getDate()+(e||0)),document.cookie=encodeURIComponent(i)+"="+t+"; path=/; expires="+n}function switchEdition(i){if(validateEdition(i)&&getCurrentEdition()!==i){setCookie("ZFEdition",i,150);var o=window.location.href.split("/");"global"===i?(o.splice(3,1),window.location=o.join("/")):"global"===getCurrentEdition()?(o.splice(3,0,i),window.location=o.join("/")):(o[3]=i,window.location=o.join("/"))}}