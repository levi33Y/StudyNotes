# v2.15.6



| Event                                  | Description                                                  | Room Event | Participant Event |
| :------------------------------------- | :----------------------------------------------------------- | :--------- | :---------------- |
| **ParticipantConnected**               | A RemoteParticipant joins *after* the local participant.     | ✔️          |                   |
| **ParticipantDisconnected**            | A RemoteParticipant leaves                                   | ✔️          |                   |
| **Reconnecting**                       | The connection to the server has been interrupted and it's attempting to reconnect. | ✔️          |                   |
| **Reconnected**                        | Reconnection has been successful                             | ✔️          |                   |
| **Disconnected**                       | Disconnected from room due to the room closing or unrecoverable failure | ✔️          |                   |
| **TrackPublished**                     | A new track is published to room after the local participant has joined | ✔️          | ✔️                 |
| **TrackUnpublished**                   | A RemoteParticipant has unpublished a track                  | ✔️          | ✔️                 |
| **TrackSubscribed**                    | The LocalParticipant has subscribed to a track               | ✔️          | ✔️                 |
| **TrackUnsubscribed**                  | A previously subscribed track has been unsubscribed          | ✔️          | ✔️                 |
| **TrackMuted**                         | A track was muted, fires for both local tracks and remote tracks | ✔️          | ✔️                 |
| **TrackUnmuted**                       | A track was unmuted, fires for both local tracks and remote tracks | ✔️          | ✔️                 |
| **LocalTrackPublished**                | A local track was published successfully                     | ✔️          | ✔️                 |
| **LocalTrackUnpublished**              | A local track was unpublished                                | ✔️          | ✔️                 |
| **ActiveSpeakersChanged**              | Current active speakers has changed                          | ✔️          |                   |
| **IsSpeakingChanged**                  | The current participant has changed speaking status          |            | ✔️                 |
| **ConnectionQualityChanged**           | Connection quality was changed for a Participant             | ✔️          | ✔️                 |
| **ParticipantAttributesChanged**       | A participant's attributes were updated                      | ✔️          | ✔️                 |
| **ParticipantMetadataChanged**         | A participant's metadata was updated                         | ✔️          | ✔️                 |
| **RoomMetadataChanged**                | Metadata associated with the room has changed                | ✔️          |                   |
| **DataReceived**                       | Data received from another participant or server             | ✔️          | ✔️                 |
| **TrackStreamStateChanged**            | Indicates if a subscribed track has been paused due to bandwidth | ✔️          | ✔️                 |
| **TrackSubscriptionPermissionChanged** | One of subscribed tracks have changed track-level permissions for the current participant | ✔️          | ✔️                 |
| **ParticipantPermissionsChanged**      | When the current participant's permissions have changed      | ✔️          | ✔️                 |



上面是livekit处理事件的说明，表头依次为事件名称，说明，room对象是否监听的到，participant对象是否会监听的到

下面你严格根据这个表格所有内容，帮我在room和participant都写好监听器，就算一个事件在房间和参会人都会触发，也不能省略其中某个对象的监听器，格式如下

```
    let handleParticipantConnected = (participant: RemoteParticipant) => {
      console.log('A participant has joined the room');
      
    };

room
  .on(RoomEvent.ParticipantConnected, handleParticipantConnected)
  .on(RoomEvent.ParticipantDisconnected, handleParticipantDisconnected)
```