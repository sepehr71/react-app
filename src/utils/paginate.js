import _ from 'lodash';

export function paginate (Items,pageNumber,pageSize){
    const startIndex = (pageNumber-1)*pageSize;
    return _(Items)
       .slice(startIndex)
       .take(pageSize)
       .value();
}