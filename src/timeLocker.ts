import {BigInt, log} from "@graphprotocol/graph-ts"
import {Action} from "../generated/schema"
import {
    ApproveNewOwner,
    ClearAction,
    OwnershipTransferred,
    ProceedAction,
    SignalPendingAction,
    SignalSetAdd,
    SignalSetGov,
    SignalSetHandler,
    SignalSetManager,
    SignalWithdrawETH,
    SignalWithdrawToken,
    TargetOperation,
    UpdateApprover,
} from "../generated/timeLocker/timeLockerAbi"

export function handleApproveNewOwner(event: ApproveNewOwner): void {
    let action = new Action(event.transaction.hash.toHexString())
    action.createdTimestamp = event.block.timestamp.toString()
    action.save()
}

export function handleClearAction(event: ClearAction): void {
    let action = new Action(event.transaction.hash.toHexString())
    action.createdTimestamp = event.block.timestamp.toString()
    action.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
    let action = new Action(event.transaction.hash.toHexString())
    action.createdTimestamp = event.block.timestamp.toString()
    action.save()
}

export function handleProceedAction(event: ProceedAction): void {
    let action = new Action(event.transaction.hash.toHexString())
    action.createdTimestamp = event.block.timestamp.toString()
    action.save()
}

export function handleSignalPendingAction(event: SignalPendingAction): void {
    let action = new Action(event.transaction.hash.toHexString())
    action.createdTimestamp = event.block.timestamp.toString()
    action.save()
}

export function handleSignalSetAdd(event: SignalSetAdd): void {
    let action = new Action(event.transaction.hash.toHexString())
    action.createdTimestamp = event.block.timestamp.toString()
    action.save()
}

export function handleSignalSetGov(event: SignalSetGov): void {
    let action = new Action(event.transaction.hash.toHexString())
    action.createdTimestamp = event.block.timestamp.toString()
    action.save()
}

export function handleSignalSetHandler(event: SignalSetHandler): void {
    let action = new Action(event.transaction.hash.toHexString())
    action.createdTimestamp = event.block.timestamp.toString()
    action.save()
}

export function handleSignalSetManager(event: SignalSetManager): void {
    let action = new Action(event.transaction.hash.toHexString())
    action.createdTimestamp = event.block.timestamp.toString()
    action.save()
}

export function handleSignalWithdrawETH(event: SignalWithdrawETH): void {
    let action = new Action(event.transaction.hash.toHexString())
    action.createdTimestamp = event.block.timestamp.toString()
    action.save()
}

export function handleSignalWithdrawToken(event: SignalWithdrawToken): void {
    let action = new Action(event.transaction.hash.toHexString())
    action.createdTimestamp = event.block.timestamp.toString()
    action.save()
}

export function handleTargetOperation(event: TargetOperation): void {
    let action = new Action(event.transaction.hash.toHexString())
    action.createdTimestamp = event.block.timestamp.toString()
    action.save()
}

export function handleUpdateApprover(event: UpdateApprover): void {
    let action = new Action(event.transaction.hash.toHexString())
    action.createdTimestamp = event.block.timestamp.toString()
    action.save()
}