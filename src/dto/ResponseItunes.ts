export interface Result {
    wrapperType: string;
    kind: string;
    artistId: number;
    collectionId: number;
    trackId: number;
    artistName: string;
    collectionName: string;
    trackName: string;
    collectionCensoredName: string;
    trackCensoredName: string;
    artistViewUrl: string;
    collectionViewUrl: string;
    trackViewUrl: string;
    previewUrl: string;
    artworkUrl30: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionPrice: number;
    trackPrice: number;
    releaseDate: string;
    collectionExplicitness: string;
    trackExplicitness: string;
    discCount: number;
    discNumber: number;
    trackCount: number;
    trackNumber: number;
    trackTimeMillis: number;
    country: string;
    currency: string;
    primaryGenreName: string;
    isStreamable: boolean;
    trackRentalPrice?: number;
    collectionHdPrice?: number;
    trackHdPrice?: number;
    trackHdRentalPrice?: number;
    contentAdvisoryRating: string;
    shortDescription: string;
    longDescription: string;
    hasITunesExtras?: boolean;
    collectionArtistId?: number;
    collectionArtistName: string;
    collectionArtistViewUrl: string;
}

export interface ResponseItunes {
    resultCount: number;
    results: Result[];
}