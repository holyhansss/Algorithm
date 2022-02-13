/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
//  var mergeTwoLists = function(list1, list2) {
//     let returnList = [];
    
//     while(list1.length !== 0 && list2.length !== 0){
//         if(list1[0]>=list2[0]){
//             returnList.push(list2[0])
//             list2.shift();
//         }else if(list1[0]<list2[0]){
//             returnList.push(list1[0])
//             list1.shift();
//         }
//     }

//     if(list1.length > 0){
//         returnList.concat(list1)
//     }else if(list2.length > 0){
//         returnList.concat(list2)
//     }

//     return returnList;
// };

// using recursion with linked list
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2; 
    if (!list2) return list1; 

    if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2); 
        return list1; 
    } else { 
        list2.next = mergeTwoLists(list1, list2.next); 
        return list2; 
    }
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}