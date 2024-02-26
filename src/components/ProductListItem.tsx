// Importing necessary components from 'react-native' library
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
// Importing colors from external file
import Colors from '../constants/Colors';
// Importing Product type from external file 'types'
import { Product } from '../types';
// Importing Link component from 'expo-router'
import { Link } from 'expo-router';

// Image URL for products, makes the correct images for the products to appear on screen 
export const defaultPizzaImages =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

// Props expected by ProductListItem component
type ProdcutListItemProps = {
    product: Product;
};

// ProductListItem component definition
const ProductListItem = ({ product }: ProdcutListItemProps) => {
  return (
    // Link component wrapping the product item with a URL pointing to the product details
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image 
          source={{ uri: product.image || defaultPizzaImages }} 
          style={styles.image} 
          resizeMode="contain"
        />
        
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>

      </Pressable>
    </Link>
  );
};

// Exporting the ProductListItem component as default
export default ProductListItem;

// Styles for the ProductListItem component
const styles = StyleSheet.create({
  container: {
    // Background color of the product item
    backgroundColor: 'white',
    // Padding around the product item
    padding: 10,
    // Border radius to give rounded corners
    borderRadius: 20,
    // Allow the product item to grow in size if needed
    flex: 1,
  // Maximum width of the product item
    maxWidth: '50%',
  },
  
  image: {
    // Set image width to fill its container
    width: '100%',
    // Maintain aspect ratio of the image
    aspectRatio: 1,
  },
  
  title: { 
    // Font size of the product title
    fontSize: 18, 
    // Font weight of the product title
    fontWeight: '600', 
    // Vertical margin around the product title
    marginVertical: 10,
  },
  price: {
    // Color of the product price
    color: Colors.light.tint,
    // Font weight of the product price
    fontWeight: 'bold',
  },
});
