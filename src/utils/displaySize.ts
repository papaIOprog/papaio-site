export type LayoutObject = {
    name: string
    min?: number
    max?: number
}

export function getLayout(): LayoutObject {
    const width = window.screen.width;
    switch (true) {
        case width < 768:
            return {
                name: "phone",
                max: 767
            }
        case width >= 768 && width < 1024:
            return {
                name: "tablet",
                min: 768,
                max: 1023
            }
        case width >= 1024 && width < 1280:
            return {
                name: "sm-desktop",
                min: 1024,
                max: 1279
            }
        case width >= 1280 && width < 1600:
            return {
                name: "desktop",
                min: 1280,
                max: 1599
            }
        case width >= 1600:
            return {
                name: "lg-desktop",
                min: 1600
            }
    }
}

export function isLayoutMobile(layout: LayoutObject) {
    return layout.max && layout.max < 1024
}