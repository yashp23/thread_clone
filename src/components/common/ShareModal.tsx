"use client"
import React from 'react'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Copy, SendHorizonal } from 'lucide-react'
import {
    FacebookShareButton,
    FacebookIcon,
} from 'next-share'
import { useToast } from '../ui/use-toast'
import {
    LineShareButton,
    LineIcon,
} from 'next-share'
import {
    PinterestShareButton,
    PinterestIcon,
} from 'next-share'
import {
    RedditShareButton,
    RedditIcon,
} from 'next-share'
import {
    TelegramShareButton,
    TelegramIcon,
} from 'next-share'
import {
    TumblrShareButton,
    TumblrIcon,
} from 'next-share'
import {
    TwitterShareButton,
    TwitterIcon,
} from 'next-share'
import {
    ViberShareButton,
    ViberIcon,
} from 'next-share'
import {
    WeiboShareButton,
    WeiboIcon, WhatsappShareButton,
    WhatsappIcon, LinkedinShareButton,
    LinkedinIcon, VKShareButton,
    VKIcon, MailruShareButton,
    MailruIcon, LivejournalShareButton,
    LivejournalIcon,
} from 'next-share'

export default function SharePost({ url }: { url: string }) {
    const { toast } = useToast();

    const copyUrl = () => {
        navigator.clipboard.writeText(url)
        toast({
            title: "Copied to clipboard",
            description: "The URL has been copied to your clipboard",
            duration: 5000,
            className: "bg-green-500 cursor-pointer"
        })
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <SendHorizonal width={20} height={20} className='cursor-pointer ml-2' />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Share Post</AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className='flex rounded-md border justify-between p-5 mt-5'>
                            <strong>{url}</strong>
                            <Copy height={20} width={20} className='cursor-pointer' onClick={copyUrl} />

                        </div>
                        <div className='mt-5 items-center space-x-6 space-y-3 '>
                            <FacebookShareButton
                                url={url}
                                quote={"thread app post Url"}
                                hashtag={'#nextshare'}
                            >
                                <FacebookIcon size={44} round />
                            </FacebookShareButton>
                            <LineShareButton
                                url={url}
                                title={"thread app post"}
                            >
                                <LineIcon size={44} />
                            </LineShareButton>
                            <PinterestShareButton
                                url={url}
                                media={'next-share is a social share buttons for your next React apps.'}
                            >
                                <PinterestIcon size={44} round />
                            </PinterestShareButton>
                            <RedditShareButton
                                url={url}
                                title={'next-share is a social share buttons for your next React apps.'}
                            >
                                <RedditIcon size={44} round />
                            </RedditShareButton>
                            <TelegramShareButton
                                url={url}
                                title={'next-share is a social share buttons for your next React apps.'}
                            >
                                <TelegramIcon size={44} round />
                            </TelegramShareButton>
                            <TumblrShareButton
                                url={url}
                                title={'next-share is a social share buttons for your next React apps.'}
                            >
                                <TumblrIcon size={44} round />
                            </TumblrShareButton>
                            <TwitterShareButton
                                url={url}
                                title={'next-share is a social share buttons for your next React apps.'}
                            >
                                <TwitterIcon size={44} round />
                            </TwitterShareButton>
                            <ViberShareButton
                                url={url}
                                title={'next-share is a social share buttons for your next React apps.'}
                            >
                                <ViberIcon size={44} round />
                            </ViberShareButton>
                            <WhatsappShareButton
                                url={url}
                                title={'next-share is a social share buttons for your next React apps.'}
                                separator=":: "
                            >
                                <WhatsappIcon size={44} round />
                            </WhatsappShareButton>
                            <LinkedinShareButton url={url}>
                                <LinkedinIcon size={44} round />
                            </LinkedinShareButton>
                            <VKShareButton
                                url={url}
                                image={'./next-share.png'}
                            >
                                <VKIcon size={44} round />
                            </VKShareButton>
                            <MailruShareButton
                                url={url}
                                title={'Next Share'}
                            >
                                <MailruIcon size={44} round />
                            </MailruShareButton>
                            <LivejournalShareButton
                                url={url}
                                title={'Next Share'}
                                description={'https://github.com/next-share'}
                            >
                                <LivejournalIcon size={44} round />
                            </LivejournalShareButton>

                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
