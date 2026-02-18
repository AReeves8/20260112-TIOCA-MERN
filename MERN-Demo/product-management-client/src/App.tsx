import { Box, Button, Container, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import { useCreateProductMutation, useGetProductsQuery } from "./apis/productApi";
import { useForm } from "react-hook-form";
import type { CreateProductRequest } from "./types/Product";
import { Category } from "./types/Category";



const App = () => {

    const {data: products = []} = useGetProductsQuery();
    const [createProduct] = useCreateProductMutation();

    // Using React Hook Form to manage form for creting products
    const {register, handleSubmit, reset, formState : {errors}} = useForm<CreateProductRequest>({
        defaultValues: {
            name: '',
            brand: '',
            price: 0.00,
            category: Category.GROCERY
        }
    });


    const formValidation = {
        price: {
            required: 'Price is required',
            validate: {
                priceNonNegative: (value: number) => value > 0 || 'Price must be non-negative'
            }
        }
    }


    // using submit function from react hook form
    const onSubmit = handleSubmit((data) => {
        createProduct(data)
            .unwrap()
            .then()
            .catch()
            .finally();

        // resetting form
        reset();
    });

    return (
        <>
            <Container maxWidth="md">
                <Box component="form" onSubmit={onSubmit}>
                    <TextField 
                        label="Name"
                        fullWidth
                        margin="normal"
                        {...register('name')}
                    />
                    <TextField 
                        label="Brand"
                        fullWidth
                        margin="normal"
                        {...register('brand')}
                    />
                    <TextField 
                        label="Price"
                        type="number"
                        fullWidth
                        margin="normal"
                        {...register('price', formValidation.price)}
                        error={!!errors.price}
                        helperText={errors.price ? errors.price.message : null}
                    />

                    {/** creating dropdown menu for categories */}
                    <TextField 
                        label="Category"
                        select
                        fullWidth
                        margin="normal"
                        {...register('category')}
                    >
                        {Object.values(Category).map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Button type="submit" variant="contained">
                        Add Product
                    </Button>
                </Box>
            </Container>
            <Container maxWidth="md">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Updated At</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product._id}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.brand}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.createdAt}</TableCell>
                                <TableCell>{product.updatedAt}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </>
    );
}

export default App;