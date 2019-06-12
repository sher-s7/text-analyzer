function uniqueWordCount(arr){
  let unique = [];
  for(let i=0;i<arr.length;i++){
    if(unique.indexOf(arr[i])===-1){
      unique.push(arr[i])
    }
  }
  return unique.length;
}

function avgWordLength(arr){
  let whole = arr.join("");
  let avg = whole.length / arr.length;
  return avg.toFixed(2);
}

function tokenizeText(text){
  let new_text = text.replace(/\r?\n|\r/g, " ");
  return new_text.toLowerCase().match(/\b[^\s]+\b/g);
}

function reportText(arr){
  let word_count = arr.length;
  let avg_count = `${avgWordLength(arr)} characters`;
  let unique_count = uniqueWordCount(arr);

  $(".js-wc").append(word_count);
  $(".js-uwc").append(unique_count);
  $(".js-awl").append(avg_count);
}

function main(){
  $(".js-text-form").submit(function(e){
    e.preventDefault();
    $(".clear").empty();
    let text = $(this).find("#user-text").val();
    let text_arr = tokenizeText(text);
    reportText(text_arr);
    $(".js-text-report").removeClass('hidden');
  })
}

$(main)