'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import ActiveCollaborators from './ActiveCollaborators'
import { Editor } from './editor/Editor'
import Header from './Header'

const CollaborativeRoom = () => {
    return (
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                <div className=' collaborative-room'>
                    <Header>
                        <div className="flex w-fit items-center justify-center gap-2">
                            <p className="document-title">Share</p>
                        </div>

                        <div className='flex w-full flex-1 justify-end gap-2 sm:gap-3'>
                                <ActiveCollaborators/>
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                        
                    </Header>
                    <Editor />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default CollaborativeRoom