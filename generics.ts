function identity<T>(arg: T): T{
    return arg;
  }

identity<string>("myString");
identity<number>(42);
identity<boolean>(true);

interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

//  Crée une classe Dictionary qui implémente l'interface KeyValuePair et qui possède deux méthodes : stock et show.
//  La méthode stock doit prendre deux paramètres, une clé de type K et une valeur de type V, et doit stocker le tout dans un tableau.


class Dictionary<K, V> implements KeyValuePair<K, V> {
    key: K;
    value: V;
    private data: KeyValuePair<K, V>[] = [];

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    public stock(key: K, value: V): void {
        this.data.push({ key, value });
    }

    public show(): void {
        this.data.forEach(element => {
            console.log(`${element.key}: ${element.value}`);
        });
    }
}


const dictionary = new Dictionary<string, number>("key", 1);

dictionary.stock("key1", 1);
dictionary.stock("key2", 2);
dictionary.stock("key3", 3);

dictionary.show();
