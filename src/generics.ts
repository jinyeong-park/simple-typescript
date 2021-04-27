// Generic Functions
function genericFunction<T>(x: T): T {
    return x;
}

const genericArrowFunction = <T>(x: T): T => x;

// Generic Interfaces
interface GenericInterface<T> {
    (a: T): T;
    someProp: T;
}

interface GenericInterface<T> {
    // (argument: type): returntype
    <U>(a: U): U;
    someProp: T;
}

// Generic Classes - cannot use for static 
class GenericClass<P> {
    constructor(public props: P) {}

    getProps(): P {
        return this.props;
    }
}

// example
interface Expirable {
    expiryDate: Date;
  }
  interface ChocolateCake extends Expirable {}
  interface VanillaCake extends Expirable {}
  
  const chocoCakes: ChocolateCake[] = [{ expiryDate: new Date() }];
  const vanillaCakes: VanillaCake[] = [{ expiryDate: new Date() }];
  
  interface GetExpiredItemsFunction {
    <Item extends Expirable>(items: Array<Item>): Array<Item>;
  }
  
  const getExpiredItems: GetExpiredItemsFunction = items => {
    const currentDate = new Date().getTime();
    return items.filter(item => item.expiryDate.getDate() < currentDate);
  };
  
  const expiredChocoCakes = getExpiredItems<ChocolateCake>(chocoCakes);
  const expiredVanillaCakes = getExpiredItems<VanillaCake>(vanillaCakes);


  // example2 
  class ShoppingCart<ItemId, Item extends { id: ItemId }> {
    private items: Array<Item> = [];
    addItem(item: Item) {
      this.items.push(item);
    }
    getItemById(id: ItemId) {
      this.items.find(item => item.id === id);
    }
    //
    //  static x: Item;
    //  static someMethod(x: Item) {
    //    let y: Item;
    //  }
  }
  