import { StyleSheet, Text, View, Image, Pressable } from 'react-native';  // importing necessary components from 'react-native' library.
import Colors from '../constants/Colors';  // importing Colors module from '../constants/Colors'.
import { Product } from '../types';  // importing Product type from '../types'.
import { Link } from 'expo-router';  // Importing Link component from 'expo-router'.

export const defaultPizzaImages =  // defining a constant variable for default pizza images.
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'; 

type ProdcutListItemProps = {  // defining a type for ProductListItemProps.
    product: Product;  // productListItemProps includes a 'product' property of type Product.
};

const ProductListItem = ({ product }: ProdcutListItemProps) => {  // defining a functional component ProductListItem that takes a 'product' prop.
  return (  // returning JSX for the component.
    <Link href={`/menu/${product.id}`} asChild>  // rendering a Link component with a dynamic URL based on the product ID.
      <Pressable style={styles.container}>  // rendering a Pressable component with custom styles.
        <Image  // rendering an Image component with a dynamic source URL based on the product image or default image.
          source={{ uri: product.image || defaultPizzaImages }} 
          style={styles.image} 
          resizeMode="contain"
        />
        
        <Text style={styles.title}>{product.name}</Text>  //Text component for the product name.
        <Text style={styles.price}>${product.price}</Text>  //Text component for the product price.

      </Pressable>
    </Link>
  );
};

export default ProductListItem;  // exporting the ProductListItem component as default.

const styles = StyleSheet.create({  // Defining styles using StyleSheet.create().
  container: {  // Style for the container View.
    backgroundColor: 'white',  // White background color.
    padding: 10,  // 10px padding.
    borderRadius: 20,  // Border radius of 20px.
    flex: 1,  // Flex value of 1.
    maxWidth: '50%',  // Maximum width of 50%.
  },
  
  image: {  // Style for the Image component.
    width: '100%',  // Full width.
    aspectRatio: 1,  // Maintain ratio.
  },
  
  title: {  // Style for the product title Text component.
    fontSize: 18,  // Font size of 18.
    fontWeight: '600',  // Font weight of 600 (semi-bold).
    marginVertical: 10,  // Vertical margin of 10px.
  },
  price: {  // Style for the product price Text component.
    color: Colors.light.tint,  // Text color from the Colors module.
    fontWeight: 'bold',  // Font weight of bold.
  },
});
