import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitLiveArticle'
})
export class SplitLiveArticlePipe implements PipeTransform {

  transform(value: string, maxWords: number): any {
    let words = value.split(' ');
    let chunks: any = [];
    let chunk = '';
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      count ++;
      chunk += words[i] + ' ';
      if (count === maxWords) {
        chunks.push(chunks);
        chunk = '';
        count = 0;
      }
    }
    if (chunk) {
      chunks.push(chunk);
    }
    return chunks;
  }

}
