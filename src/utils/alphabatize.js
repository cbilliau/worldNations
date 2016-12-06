// This function sorts and array by region key and then by name key

export default function(arr) {

    let sortByCriteria = (data, criteria) => {
      // credit: http://tinyurl.com/h7ymowx
        return data.sort(function(a, b) {

            var i,
                iLen,
                aChain,
                bChain;

            i = 0;
            iLen = criteria.length;
            for (i; i < iLen; i++) {
                aChain += a[criteria[i]];
                bChain += b[criteria[i]];
            }

            return aChain.localeCompare(bChain);
        });
    }

    let sorted = sortByCriteria(arr, ['region', 'name']);

    return sorted;
}
