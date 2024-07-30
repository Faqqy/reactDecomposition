export interface INewsType {
    id?: number,
    title?: string,
    icon?: string,
    url?: string
}

export interface IButtonName {
    title?: string,
    className?: string
}

export interface ISearchTab {
    id?: number,
    title?: string,
    url?: string
}

export interface INodes {
    children: React.ReactNode;
}

export interface IRightBlock {
    img: string;
}
