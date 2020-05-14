export const passSelectedProductAction = (product) => {
    return {
        type: "SELECTED_PRODUCT",
        payload: product
    }
}