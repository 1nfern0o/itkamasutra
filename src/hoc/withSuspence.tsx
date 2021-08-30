import React, {ComponentType, Suspense} from "react";

export function withSuspense<WCP>(WrappedComponent: ComponentType<WCP>) {
    return (props: WCP) => {
        return (
            <Suspense fallback={<h1>Loading profile...</h1>}>
                <WrappedComponent {...props}/>
            </Suspense>
            )
    }
}