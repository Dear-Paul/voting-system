
// Utility function that returns data based on the category
export const filteredCategory = (categories: Array<{ [key: string]: any }>, type: string) => {
    let data = undefined;
    if (type === 'best-director') {
        data = categories?.find((category) => category.id === 'best-director')
    } else if (type === 'best-actor') {
        data = categories?.find((category) => category.id === 'best-actor')
    } else if (type === 'best-actress') {
        data = categories?.find((category) => category.id === 'best-actress')
    } else if (type === 'best-visual-effects') {
        data = categories?.find((category) => category.id === 'best-visual-effects')
    } else if (type === 'best-supporting-actor') {
        data = categories?.find((category) => category.id === 'best-supporting-actor')
    } else if (type === 'best-supporting-actress') {
        data = categories?.find((category) => category.id === 'best-supporting-actress')
    } else {
        if (type === 'best-picture') {
            data = categories?.find((category) => category.id === 'best-picture')
        }
    }
    return data;
}


// Category type
export type ICategory = {
    id: string
    photoUrL: string
    title: string
  }

// Initial state of category  
export const initialState = {
    id: "",
    photoUrL: '',
    title: ''
  }