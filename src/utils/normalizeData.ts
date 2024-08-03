export const normalizeData = ({ latitude, longitude }: { latitude: string, longitude: string }) => ({
    lat: Number(latitude), 
    lng: Number(longitude) 
});
