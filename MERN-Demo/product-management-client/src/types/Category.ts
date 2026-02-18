export const Category = {
    PRODUCE: 'Produce',
    DAIRY: 'Dairy',
    MEAT: 'Meat',
    GROCERY: 'Grocery'
} as const;     // prevent individual properties from being modified

export type Category = typeof Category[keyof typeof Category];

// line 8 translates the object to look like the following:
//export type Category = 'Produce' | 'Dairy' | 'Meat' | 'Grocery'