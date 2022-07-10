class Codec() {
    val BASE_URL: String = "http://tinyurl.com/"
    private val urlMap = HashMap<Int, String>();

    // Encodes a URL to a shortened URL.
    fun encode(longUrl: String): String {
        val key = longUrl.hashCode();
        urlMap[key] = longUrl;
        return BASE_URL + key;
    }

    // Decodes a shortened URL to its original URL.
    fun decode(shortUrl: String): String {
        val key = shortUrl.replace(BASE_URL, "").toInt();
        return urlMap.get(key).orEmpty();
    }
}
