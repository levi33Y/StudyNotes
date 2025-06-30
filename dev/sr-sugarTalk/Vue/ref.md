vue3 子组件participant绑定ref room对象的属性participant，participant为对象，当participant变化时，为什么模版不会重新渲染

//p
<waiting-panel
v-if="!isActive && room?.state"
:participant="room?.localParticipant"
@leave-meeting="() => leaveMeeting()"
@edit-name="handleMemberListDataReceived"
/>

//c

<div class="info-value">{{ props.participant?.name ?? "" }}</div>