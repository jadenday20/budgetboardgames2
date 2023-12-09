export default function formatPrice(Price: number) {
    // Function to format price to $X.XX
    return `$${Price.toFixed(2)}`;
}
