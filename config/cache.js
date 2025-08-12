let cache = []

function saveToCache(cityName , data){
    if(cache.length >=5){
        cache.shift();
    }
    cache.push({cityName, data});
} 

function getFromCache(cityName){
    const cacheData = cache.find(item => item.cityName === cityName);
    if(cacheData){
        return cacheData.data;
    }
    return null;
}

module.exports = {getFromCache, saveToCache};