export interface Notification {
    id: string;
    title: string;
    message: string;
    createdAt: Date;
    read: boolean;
    recipientId: string;
}

export interface RealTimeEvent {
    event: string;
    data: any;
}